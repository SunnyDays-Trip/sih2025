import os
import json
from dotenv import load_dotenv
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.chains import ConversationalRetrievalChain
from langchain.memory import ConversationBufferMemory
from utils import clean_text, detect_language, translate_to_english, translate_from_english

# -----------------------------
# Load .env
# -----------------------------
load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), ".env"))

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if not GEMINI_API_KEY:
    raise ValueError("❌ GEMINI_API_KEY not found in .env!")

# -----------------------------
# Load JSON advisory data
# -----------------------------
def load_json(file_name):
    base_path = os.path.join(os.path.dirname(__file__), "data")
    file_path = os.path.join(base_path, file_name)
    with open(file_path, "r", encoding="utf-8") as f:
        return json.load(f)

crops_data = load_json("crops.json")
irrigation_data = load_json("irrigation.json")
fertilizer_data = load_json("fertilizers.json")
market_data = load_json("market.json")
harvest_data = load_json("harvest.json")
livestock_data = load_json("livestock.json")
pest_disease_data = load_json("pest_disease.json")
seeds_data = load_json("seeds.json")
technology_data = load_json("technology.json")

# -----------------------------
# LLM (Gemini)
# -----------------------------
def get_llm():
    return ChatGoogleGenerativeAI(
        model="gemini-2.5-flash",
        google_api_key=GEMINI_API_KEY,
        temperature=0.3,
    )

# -----------------------------
# Load FAISS Vector Store (if available)
# -----------------------------
VECTORSTORE_PATH = "vector_store"
EMBEDDING_MODEL_NAME = "intfloat/multilingual-e5-large-instruct"

def load_vector_store():
    try:
        embeddings = HuggingFaceEmbeddings(model_name=EMBEDDING_MODEL_NAME)
        vectorstore = FAISS.load_local(
            VECTORSTORE_PATH,
            embeddings,
            allow_dangerous_deserialization=True
        )
        retriever = vectorstore.as_retriever(search_kwargs={"k": 5})
        print("✅ FAISS vector store loaded successfully")
        return retriever
    except Exception as e:
        print(f"⚠ Cannot load FAISS vector store: {str(e)}")
        return None

# -----------------------------
# QA Chain Setup
# -----------------------------
memory = ConversationBufferMemory(memory_key="chat_history", return_messages=True)
retriever = load_vector_store()

qa_chain = None
if retriever is not None:
    qa_chain = ConversationalRetrievalChain.from_llm(
        llm=get_llm(),
        retriever=retriever,
        memory=memory,
        return_source_documents=False,
    )

# -----------------------------
# Generate Context Prompt
# -----------------------------
# -----------------------------
# Generate Context Prompt (language-aware)
# -----------------------------
def generate_context(user_query, user_lang="en"):
    # Decide output language instruction dynamically
    if user_lang.startswith("en"):
        lang_instruction = "Answer in clear English (short, clear, and helpful)."
    elif user_lang.startswith("hi"):
        lang_instruction = "Answer in simple Hindi (short, clear, and helpful)."
    elif user_lang.startswith("pa"):
        lang_instruction = "Answer in simple Punjabi (short, clear, and helpful)."
    else:
        lang_instruction = "Answer in the same language as the question (short, clear, and helpful)."

    context = f"""
You are a Punjab agriculture advisory assistant.
Use the following local agricultural data to answer farmer queries:

Crops: {json.dumps(crops_data, ensure_ascii=False, indent=2)}
Irrigation: {json.dumps(irrigation_data, ensure_ascii=False, indent=2)}
Fertilizers: {json.dumps(fertilizer_data, ensure_ascii=False, indent=2)}
Market: {json.dumps(market_data, ensure_ascii=False, indent=2)}
Harvest: {json.dumps(harvest_data, ensure_ascii=False, indent=2)}
Livestock: {json.dumps(livestock_data, ensure_ascii=False, indent=2)}
Pest/Disease: {json.dumps(pest_disease_data, ensure_ascii=False, indent=2)}
Seeds: {json.dumps(seeds_data, ensure_ascii=False, indent=2)}
Technology: {json.dumps(technology_data, ensure_ascii=False, indent=2)}

Farmer asked: {user_query}
{lang_instruction}
"""
    return context


# -----------------------------
# Advisory Chat Function
# -----------------------------
# -----------------------------
# Advisory Chat Function (language-aware)
# -----------------------------
def get_advisory(user_query):
    try:
        # Detect user language
        user_lang = detect_language(user_query)

        # Build context dynamically
        prompt = generate_context(user_query, user_lang)

        if qa_chain:
            # Clean query for retrieval
            processed_query = clean_text(user_query)
            if user_lang != "en":
                processed_query = translate_to_english(processed_query)  # only for FAISS search
            result = qa_chain.invoke({"question": processed_query})
            answer_text = result.get("answer", "")
        else:
            # Direct LLM call
            llm = get_llm()
            response = llm.invoke(prompt)
            answer_text = response.content

        # Translate answer back if needed (non-English)
        if user_lang != "en":
            answer_text = translate_from_english(answer_text, user_lang)

        return answer_text.strip()

    except Exception as e:
        print(f"❌ Error: {str(e)}")
        return "⚠ Something went wrong. Please try again later."



# -----------------------------
# Interactive Loop
# -----------------------------
if __name__ == "__main__":
    print("🌾 Punjab Advisory Chatbot Ready!")
    print("Type 'exit' or 'quit' to stop.\n")
    while True:
        query = input("👨‍🌾 Enter your question: ")
        if query.lower() in ["exit", "quit"]:
            break
        answer = get_advisory(query)
        print("\n🤖 Assistant:", answer, "\n")
