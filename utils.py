# utils.py
from langdetect import detect
from deep_translator import GoogleTranslator
import re

# 🔤 Detect language
def detect_language(text: str) -> str:
    try:
        return detect(text)
    except:
        return "en"

# 🌐 Translate to English
def translate_to_english(text: str) -> str:
    try:
        return GoogleTranslator(source="auto", target="en").translate(text)
    except:
        return text

# 🌐 Translate from English back to user language
def translate_from_english(text: str, target_lang: str) -> str:
    try:
        if target_lang == "en":
            return text
        return GoogleTranslator(source="en", target=target_lang).translate(text)
    except:
        return text

# 🧹 Clean text (remove unwanted symbols/spaces)
def clean_text(text: str) -> str:
    return re.sub(r"\s+", " ", text).strip()

# ✅ Check if text contains a particular language (basic check)
def contains_language(text: str, lang: str) -> bool:
    return detect_language(text) == lang
