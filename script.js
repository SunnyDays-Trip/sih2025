    
        // ========== MULTI-LANGUAGE SUPPORT ==========
        const translations = {
            en: {
                // Header
                "header-title": "Mitti Sewa",
                "signin-text": "Sign In",
                "about-text": "About",
                "download-text": "Download App",
                
                // Weather Card
                "weather-title": "Weather",
                "weather-alert": "Heavy rain expected in 5 days. Prepare drainage.",
                
                // Market Prices
                "market-title": "Market Prices",
                "wheat-label": "Wheat",
                "rice-label": "Rice",
                "cotton-label": "Cotton",
                "maize-label": "Maize",
                
                // Irrigation
                "irrigation-title": "Irrigation Advisory",
                "irrigation-text": "Next irrigation recommended in 3 days",
                "water-requirement": "Water requirement: 2.5 cm",
                
                // Soil Health
                "soil-title": "Soil Health",
                "ph-label": "pH Level",
                "nitrogen-label": "Nitrogen",
                "phosphorus-label": "Phosphorus",
                "potassium-label": "Potassium",
                
                // Crop Rotation
                "rotation-title": "Crop Rotation Advisor",
                "rotation-text": "Based on your current wheat crop, we recommend:",
                "legumes-label": "Legumes",
                "legumes-types": "Chickpea, Lentil",
                "oilseeds-label": "Oilseeds",
                "oilseeds-types": "Mustard, Sunflower",
                "ar-button": "View in AR",
                
                // Chat
                "chat-title": "Crop Advisory Chat",
                "welcome-message": "Hello! I'm your crop advisory assistant. How can I help you today? You can ask about crops, pests, weather impact, or farming techniques.",
                
                // Fertilizer
                "fertilizer-title": "Fertilizer Schedule",
                "show-button": "Show",
                "basal-label": "Basal Application",
                "first-dressing-label": "First Top Dressing (21 DAS)",
                "second-dressing-label": "Second Top Dressing (45 DAS)",
                
                // Pest Identification
                "pest-title": "Pest Identification",
                "upload-text": "Upload an image of affected crop",
                "choose-image-text": "Choose Image",
                "analyze-text": "Analyze",
                "pest-default-text": "Upload an image to identify pests and get treatment suggestions.",
                
                // Government Schemes
                "schemes-title": "Government Schemes",
                "schemes-text": "Available schemes for Punjab farmers:",
                "pmkisan-label": "PM-KISAN",
                "pmkisan-desc": "₹6,000/year financial support",
                "soilcard-label": "Soil Health Card",
                "soilcard-desc": "Free soil testing and advisory",
                "irrigation-label": "Micro Irrigation Fund",
                "irrigation-desc": "Subsidy for drip irrigation systems",
                "active-badge": "Active",
                "active-badge2": "Active",
                "active-badge3": "Active",
                
                // Community Forum
                "community-title": "Community Forum",
                "community-text": "Connect with other farmers to share knowledge and solutions",
                "rajesh-desc": "Wheat farmer from Punjab",
                "rajesh-post": "Has anyone tried the new organic fertilizer for wheat? Results seem promising!",
                "priya-desc": "Rice farmer from Haryana",
                "priya-post": "Dealing with brown plant hopper in my rice field. Any effective organic solutions?",
                "add-question-text": "Add Your Question",
                
                // Footer
                "footer-text": "Mitti Sewa - Smart Crop Advisory System © 2023 | Developed for Government of Punjab",
                "footer-desc": "This system provides AI-powered advice for small and marginal farmers",
                
                // Modals
                "signin-modal-title": "Sign In",
                "email-label": "Email Address",
                "password-label": "Password",
                "signin-button": "Sign In",
                "no-account-text": "Don't have an account?",
                "register-link": "Register here",
                "about-modal-title": "About Mitti Sewa",
                "about-text1": "Mitti Sewa is an AI-powered crop advisory system designed for small and marginal farmers in Punjab. Our system provides:",
                "about-list1": "Personalized crop advice",
                "about-list2": "Weather forecasts and alerts",
                "about-list3": "Pest and disease identification",
                "about-list4": "Soil health management",
                "about-list5": "Market price information",
                "about-list6": "Fertilizer scheduling",
                "about-list7": "Irrigation guidance",
                "about-list8": "Community knowledge sharing",
                "about-list9": "Crop rotation recommendations",
                "about-list10": "Government scheme information",
                "about-text2": "Our mission is to empower farmers with technology-driven solutions to improve yield, reduce costs, and increase profitability.",
                
                // Offline message
                "offline-text": "You are currently offline. Some features may be limited.",
                
                // Chatbot responses
                "chat-what-to-sow": "What to sow this season?",
                "chat-pest-problems": "Pest problems",
                "chat-fertilizer-advice": "Fertilizer advice",
                "chat-weather-impact": "Weather impact",
                "chat-tell-more-wheat": "Tell me more about wheat cultivation",
                "chat-best-crops": "Best crops for next season",
                "chat-improve-soil": "How to improve soil health",
                "chat-wheat-info": "Wheat is a Rabi season crop. Ideal sowing time in Punjab is from late October to November. Recommended varieties: HD-2967, PBW-725, and WH-1105. Based on current market prices, wheat is trading at ₹2,100/qt with an upward trend.",
                "chat-rice-info": "Rice is a Kharif season crop. Ideal sowing time in Punjab is June. Recommended varieties: PR-126, PR-121, and Pusa-44. Requires continuous water supply. I can provide detailed information on water management techniques if you're interested.",
                "chat-cotton-info": "Cotton is a Kharif crop. Pink bollworm is a major pest - use recommended pheromone traps. Recommended varieties: Bt cotton hybrids like RCH-776 and MRC-7351. Current market prices are favorable at ₹6,500/qt.",
                "chat-maize-info": "Maize can be grown in both Kharif and Rabi seasons. For Kharif: sow in June-July. For Rabi: sow in October-November. Recommended varieties: PMH-1, J-1006. Current prices are at ₹1,700/qt but trending downward.",
                "chat-pest-advice": "For common pests, I recommend using integrated pest management techniques. This includes cultural practices, biological controls, and targeted pesticide use. Could you specify which crop and pest you're dealing with?",
                "chat-fertilizer-advice-detail": "Fertilizer requirements depend on your soil health and crop type. Based on your soil test results, I recommend a balanced NPK fertilizer with additional micronutrients as needed. Would you like specific recommendations for a particular crop?",
                "chat-weather-advice": "Current weather in Punjab is favorable for Rabi crops. Expect light rainfall in the next 3 days. Ensure proper drainage in your fields. Heavy rain is expected in 5 days, so prepare drainage systems in advance.",
                "chat-soil-improvement": "To improve your soil health, I recommend: 1) Adding organic matter through compost or manure, 2) Practicing crop rotation, 3) Using green manure crops, and 4) Minimizing chemical fertilizer use. Based on your soil test, you should focus on increasing phosphorus levels.",
                "chat-season-suggestion": "Based on the current season, here are some sowing suggestions: Wheat, barley, mustard, gram, and peas are ideal for Rabi season. Considering your location in Punjab, I would recommend wheat as it's the most profitable this season.",
                "chat-default-response": "I'd be happy to help! Could you please provide more details about your query? For example, you could ask about specific crops, pest problems, weather impact, or farming techniques."
            },
            hi: {
                // Header
                "header-title": "मिट्टी सेवा",
                "signin-text": "साइन इन",
                "about-text": "के बारे में",
                "download-text": "ऐप डाउनलोड करें",
                
                // Weather Card
                "weather-title": "मौसम",
                "weather-alert": "5 दिनों में भारी बारिश की संभावना। जल निकासी की तैयारी करें।",
                
                // Market Prices
                "market-title": "बाजार की कीमतें",
                "wheat-label": "गेहूं",
                "rice-label": "चावल",
                "cotton-label": "कपास",
                "maize-label": "मक्का",
                
                // Irrigation
                "irrigation-title": "सिंचाई सलाह",
                "irrigation-text": "अगली सिंचाई 3 दिनों में recommended",
                "water-requirement": "पानी की आवश्यकता: 2.5 सेमी",
                
                // Soil Health
                "soil-title": "मृदा स्वास्थ्य",
                "ph-label": "पीएच स्तर",
                "nitrogen-label": "नाइट्रोजन",
                "phosphorus-label": "फास्फोरस",
                "potassium-label": "पोटेशियम",
                
                // Crop Rotation
                "rotation-title": "फसल चक्र सलाहकार",
                "rotation-text": "आपकी वर्तमान गेहूं की फसल के आधार पर, हम recommend करते हैं:",
                "legumes-label": "फलियां",
                "legumes-types": "चना, मसूर",
                "oilseeds-label": "तिलहन",
                "oilseeds-types": "सरसों, सूरजमुखी",
                "ar-button": "AR में देखें",
                
                // Chat
                "chat-title": "फसल सलाह चैट",
                "welcome-message": "नमस्ते! मैं आपका फसल सलाह सहायक हूं। आज मैं आपकी कैसे मदद कर सकता हूं? आप फसलों, कीटों, मौसम के प्रभाव, या खेती की तकनीकों के बारे में पूछ सकते हैं।",
                
                // Fertilizer
                "fertilizer-title": "उर्वरक अनुसूची",
                "show-button": "दिखाएं",
                "basal-label": "बेसल एप्लीकेशन",
                "first-dressing-label": "पहली टॉप ड्रेसिंग (21 DAS)",
                "second-dressing-label": "दूसरी टॉप ड्रेसिंग (45 DAS)",
                
                // Pest Identification
                "pest-title": "कीट पहचान",
                "upload-text": "प्रभावित फसल की छवि अपलोड करें",
                "choose-image-text": "छवि चुनें",
                "analyze-text": "विश्लेषण",
                "pest-default-text": "कीटों की पहचान करने और उपचार सुझाव प्राप्त करने के लिए एक छवि अपलोड करें।",
                
                // Government Schemes
                "schemes-title": "सरकारी योजनाएं",
                "schemes-text": "पंजाब के किसानों के लिए उपलब्ध योजनाएं:",
                "pmkisan-label": "पीएम-किसान",
                "pmkisan-desc": "₹6,000/वर्ष वित्तीय सहायता",
                "soilcard-label": "मृदा स्वास्थ्य कार्ड",
                "soilcard-desc": "मुफ्त मृदा परीक्षण और सलाह",
                "irrigation-label": "सूक्ष्म सिंचाई कोष",
                "irrigation-desc": "ड्रिप सिंचाई systems के लिए सब्सिडी",
                "active-badge": "सक्रिय",
                "active-badge2": "सक्रिय",
                "active-badge3": "सक्रिय",
                
                // Community Forum
                "community-title": "कम्युनिटी फोरम",
                "community-text": "ज्ञान और solutions साझा करने के लिए अन्य किसानों से जुड़ें",
                "rajesh-desc": "पंजाब से गेहूं किसान",
                "rajesh-post": "क्या किसी ने गेहूं के लिए नए जैविक उर्वरक आज़माया है? परिणाम आशाजनक लगते हैं!",
                "priya-desc": "हरियाणा से चावल किसान",
                "priya-post": "मेरे चावल के खेत में भूरा प्लांट hopper से निपटना। कोई प्रभावी जैविक solutions?",
                "add-question-text": "अपना प्रश्न जोड़ें",
                
                // Footer
                "footer-text": "मिट्टी सेवा - स्मार्ट फसल सलाह प्रणाली © 2023 | पंजाब सरकार के लिए विकसित",
                "footer-desc": "यह system छोटे और सीमांत किसानों के लिए AI- powered सलाह प्रदान करता है",
                
                // Modals
                "signin-modal-title": "साइन इन",
                "email-label": "ईमेल पता",
                "password-label": "पासवर्ड",
                "signin-button": "साइन इन",
                "no-account-text": "खाता नहीं है?",
                "register-link": "यहां पंजीकरण करें",
                "about-modal-title": "मिट्टी सेवा के बारे में",
                "about-text1": "मिट्टी सेवा एक AI- powered फसल सलाह प्रणाली है जो पंजाब में छोटे और सीमांत किसानों के लिए designed है। हमारी system प्रदान करती है:",
                "about-list1": "व्यक्तिगत फसल सलाह",
                "about-list2": "मौसम पूर्वानुमान और alerts",
                "about-list3": "कीट और रोग पहचान",
                "about-list4": "मृदा स्वास्थ्य प्रबंधन",
                "about-list5": "बाजार मूल्य जानकारी",
                "about-list6": "उर्वरक scheduling",
                "about-list7": "सिंचाई मार्गदर्शन",
                "about-list8": "community ज्ञान साझा करना",
                "about-list9": "फसल चक्र recommendations",
                "about-list10": "सरकारी योजना information",
                "about-text2": "हमारा mission है technology- driven solutions के साथ किसानों को सशक्त बनाना ताकि yield में सुधार हो, costs कम हो और profitability बढ़े।",
                
                // Offline message
                "offline-text": "आप वर्तमान में ऑफलाइन हैं। कुछ features सीमित हो सकते हैं。",
                
                // Chatbot responses
                "chat-what-to-sow": "इस सीजन में क्या बोयें?",
                "chat-pest-problems": "कीट समस्याएं",
                "chat-fertilizer-advice": "उर्वरक सलाह",
                "chat-weather-impact": "मौसम का प्रभाव",
                "chat-tell-more-wheat": "गेहूं की खेती के बारे में और बताएं",
                "chat-best-crops": "अगले सीजन की सबसे अच्छी फसलें",
                "chat-improve-soil": "मिट्टी की सेहत कैसे सुधारें",
                "chat-wheat-info": "गेहूं रबी सीजन की फसल है। पंजाब में बुआई का आदर्श समय अक्टूबर के अंत से नवंबर तक है। अनुशंसित किस्में: HD-2967, PBW-725, और WH-1105। वर्तमान बाजार मूल्यों के आधार पर, गेहूं ₹2,100/qt पर ऊपर की ओर रुझान के साथ कारोबार कर रहा है।",
                "chat-rice-info": "चावल खरीफ सीजन की फसल है। पंजाब में बुआई का आदर्श समय जून है। अनुशंसित किस्में: PR-126, PR-121, और Pusa-44। निरंतर पानी की आपूर्ति की आवश्यकता होती है। यदि आप रुचि रखते हैं तो मैं जल प्रबंधन तकनीकों के बारे में विस्तृत जानकारी प्रदान कर सकता हूं।",
                "chat-cotton-info": "कपास खरीफ की फसल है। गुलाबी इल्ली एक प्रमुख कीट है - अनुशंसित फेरोमोन जाल का उपयोग करें। अनुशंसित किस्में: बीटी कपास संकर जैसे RCH-776 और MRC-7351। वर्तमान बाजार मूल्य ₹6,500/qt पर अनुकूल हैं।",
                "chat-maize-info": "मक्का खरीफ और रबी दोनों मौसमों में उगाया जा सकता है। खरीफ के लिए: जून-जुलाई में बोएं। रबी के लिए: अक्टूबर-नवंबर में बोएं। अनुशंसित किस्में: PMH-1, J-1006। वर्तमान कीमतें ₹1,700/qt पर हैं लेकिन नीचे की ओर रुझान है।",
                "chat-pest-advice": "आम कीटों के लिए, मैं एकीकृत कीट प्रबंधन तकनीकों का उपयोग करने की सलाह देता हूं। इसमें सांस्कृतिक प्रथाएं, जैविक नियंत्रण और लक्षित कीटनाशक उपयोग शामिल है। क्या आप बता सकते हैं कि आप किस फसल और कीट से निपट रहे हैं?",
                "chat-fertilizer-advice-detail": "उर्वरक आवश्यकताएं आपके मिट्टी के स्वास्थ्य और फसल के प्रकार पर निर्भर करती हैं। आपके मिट्टी परीक्षण परिणामों के आधार पर, मैं अतिरिक्त सूक्ष्म पोषक तत्वों के साथ संतुलित NPK उर्वरक की सलाह देता हूं। क्या आप किसी विशेष फसल के लिए विशिष्ट सिफारिशें चाहेंगे?",
                "chat-weather-advice": "पंजाब में वर्तमान मौसम रबी फसलों के लिए अनुकूल है। अगले 3 दिनों में हल्की बारिश की उम्मीद है। अपने खेतों में उचित जल निकासी सुनिश्चित करें। 5 दिनों में भारी बारिश expected है, इसलिए drainage systems को पहले से तैयार करें।",
                "chat-soil-improvement": "अपने मिट्टी के स्वास्थ्य में सुधार करने के लिए, मैं recommend करता हूं: 1) compost या manure के through organic matter जोड़ना, 2) crop rotation का अभ्यास करना, 3) green manure crops का उपयोग करना, और 4) chemical fertilizer के use को कम से कम करना। आपके मिट्टी परीक्षण के आधार पर, आपको phosphorus levels बढ़ाने पर ध्यान देना चाहिए।",
                "chat-season-suggestion": "वर्तमान मौसम के आधार पर, यहां कुछ बुआई सुझाव दिए गए हैं: गेहूं, जौ, सरसों, चना और मटर रबी के मौसम के लिए आदर्श हैं। पंजाब में आपके स्थान को देखते हुए, मैं गेहूं की सलाह दूंगा क्योंकि यह इस मौसम में सबसे अधिक लाभदायक है।",
                "chat-default-response": "मैं आपकी मदद करने के लिए यहां हूं! क्या आप कृपया अपनी query के बारे में और details provide कर सकते हैं? उदाहरण के लिए, आप specific crops, pest problems, weather impact, या farming techniques के बारे में पूछ सकते हैं।"
            },
            pa: {
                // Header
                "header-title": "ਮਿੱਟੀ ਸੇਵਾ",
                "signin-text": "ਸਾਈਨ ਇਨ",
                "about-text": "ਬਾਰੇ",
                "download-text": "ਐਪ ਡਾਊਨਲੋਡ ਕਰੋ",
                
                // Weather Card
                "weather-title": "ਮੌਸਮ",
                "weather-alert": "5 ਦਿਨਾਂ ਵਿੱਚ ਭਾਰੀ ਬਾਰਸ਼ ਦੀ ਸੰਭਾਵਨਾ ਹੈ। ਨਿਕਾਸੀ ਦੀ ਤਿਆਰੀ ਕਰੋ।",
                
                // Market Prices
                "market-title": "ਮਾਰਕੀਟ ਦੀਆਂ ਕੀਮਤਾਂ",
                "wheat-label": "ਕਣਕ",
                "rice-label": "ਚਾਵਲ",
                "cotton-label": "ਕਪਾਹ",
                "maize-label": "ਮੱਕੀ",
                
                // Irrigation
                "irrigation-title": "ਸਿੰਜਾਈ ਸਲਾਹ",
                "irrigation-text": "ਅਗਲੀ ਸਿੰਜਾਈ 3 ਦਿਨਾਂ ਵਿੱਚ ਸਿਫਾਰਸ਼ ਕੀਤੀ ਗਈ ਹੈ",
                "water-requirement": "ਪਾਣੀ ਦੀ ਲੋੜ: 2.5 ਸੈਮੀ",
                
                // Soil Health
                "soil-title": "ਮਿੱਟੀ ਦੀ ਸਿਹਤ",
                "ph-label": "pH ਪੱਧਰ",
                "nitrogen-label": "ਨਾਈਟ੍ਰੋਜਨ",
                "phosphorus-label": "ਫਾਸਫੋਰਸ",
                "potassium-label": "ਪੋਟਾਸ਼ੀਅਮ",
                
                // Crop Rotation
                "rotation-title": "ਫਸਲ ਚਕਰ ਸਲਾਹਕਾਰ",
                "rotation-text": "ਤੁਹਾਡੀ ਮੌਜੂਦਾ ਕਣਕ ਦੀ ਫਸਲ ਦੇ ਆਧਾਰ 'ਤੇ, ਅਸੀਂ ਸਿਫਾਰਸ਼ ਕਰਦੇ ਹਾਂ:",
                "legumes-label": "ਫਲੀਆਂ",
                "legumes-types": "ਛੋਲੇ, ਮਸੂਰ",
                "oilseeds-label": "ਤੇਲ ਬੀਜ",
                "oilseeds-types": "ਸਰ੍ਹੋਂ, ਸੂਰਜਮੁਖੀ",
                "ar-button": "AR ਵਿੱਚ ਦੇਖੋ",
                
                // Chat
                "chat-title": "ਫਸਲ ਸਲਾਹ ਚੈਟ",
                "welcome-message": "ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਤੁਹਾਡਾ ਫਸਲ ਸਲਾਹ ਸਹਾਇਕ ਹਾਂ। ਮੈਂ ਅੱਜ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ? ਤੁਸੀਂ ਫਸਲਾਂ, ਕੀੜੇ, ਮੌਸਮ ਦੇ ਪ੍ਰਭਾਵ, ਜਾਂ ਖੇਤੀ ਦੀਆਂ ਤਕਨੀਕਾਂ ਬਾਰੇ ਪੁੱਛ ਸਕਦੇ ਹੋ।",
                
                // Fertilizer
                "fertilizer-title": "ਖਾਦ ਅਨੁਸੂਚੀ",
                "show-button": "ਦਿਖਾਓ",
                "basal-label": "ਬੇਸਲ ਐਪਲੀਕੇਸ਼ਨ",
                "first-dressing-label": "ਪਹਿਲੀ ਟਾਪ ਡ੍ਰੈਸਿੰਘ (21 DAS)",
                "second-dressing-label": "ਦੂਜੀ ਟਾਪ ਡ੍ਰੈਸਿੰਘ (45 DAS)",
                
                // Pest Identification
                "pest-title": "ਕੀੜੇ ਦੀ ਪਛਾਣ",
                "upload-text": "ਪ੍ਰਭਾਵਿਤ ਫਸਲ ਦੀ ਚਿੱਤਰ ਅਪਲੋਡ ਕਰੋ",
                "choose-image-text": "ਚਿੱਤਰ ਚੁਣੋ",
                "analyze-text": "ਵਿਸ਼ਲੇਸ਼ਣ",
                "pest-default-text": "ਕੀੜੇ ਦੀ ਪਛਾਣ ਕਰਨ ਅਤੇ ਇਲਾਜ ਦੇ ਸੁਝਾਵ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਇੱਕ ਚਿੱਤਰ ਅਪਲੋਡ ਕਰੋ।",
                
                // Government Schemes
                "schemes-title": "ਸਰਕਾਰੀ ਯੋਜਨਾਵਾਂ",
                "schemes-text": "ਪੰਜਾਬ ਦੇ ਕਿਸਾਨਾਂ ਲਈ ਉਪਲਬਧ ਯੋਜਨਾਵਾਂ:",
                "pmkisan-label": "ਪੀਐਮ-ਕਿਸਾਨ",
                "pmkisan-desc": "₹6,000/ਸਾਲ ਵਿੱਤੀ ਸਹਾਇਤਾ",
                "soilcard-label": "ਮਿੱਟੀ ਸਿਹਤ ਕਾਰਡ",
                "soilcard-desc": "ਮੁਫ਼ਤ ਮਿੱਟੀ ਪਰੀਖਣ ਅਤੇ ਸਲਾਹ",
                "irrigation-label": "ਮਾਈਕ੍ਰੋ ਸਿੰਜਾਈ ਫੰਡ",
                "irrigation-desc": "ਡ੍ਰਿਪ ਸਿੰਜਾਈ ਸਿਸਟਮਾਂ ਲਈ ਸਬਸਿਡੀ",
                "active-badge": "ਸਰਗਰਮ",
                "active-badge2": "ਸਰਗਰਮ",
                "active-badge3": "ਸਰਗਰਮ",
                
                // Community Forum
                "community-title": "ਕਮਿਊਨਿਟੀ ਫੋਰਮ",
                "community-text": "ਜਾਣਕਾਰੀ ਅਤੇ ਹੱਲ ਸਾਂਝੇ ਕਰਨ ਲਈ ਹੋਰ ਕਿਸਾਨਾਂ ਨਾਲ ਜੁੜੋ",
                "rajesh-desc": "ਪੰਜਾਬ ਤੋਂ ਕਣਕ ਕਿਸਾਨ",
                "rajesh-post": "ਕੀ ਕਿਸੇ ਨੇ ਕਣਕ ਲਈ ਨਵਾਂ ਜੈਵਿਤ ਖਾਦ ਅਜ਼ਮਾਇਆ ਹੈ? ਨਤੀਜੇ ਆਸ਼ਾਜਨਕ ਲੱਗ ਰਹੇ ਹਨ!",
                "priya-desc": "ਹਰਿਆਣਾ ਤੋਂ ਚਾਵਲ ਕਿਸਾਨ",
                "priya-post": "ਮੇਰੇ ਚਾਵਲ ਦੇ ਖੇਤ ਵਿੱਚ ਬ੍ਰਾਊਨ ਪਲਾਂਟ ਹੌਪਰ ਨਾਲ ਨਜਿੱਠਣਾ। ਕੋਈ ਪ੍ਰਭਾਵਸ਼ਾਲੀ ਜੈਵਿਕ ਹੱਲ?",
                "add-question-text": "ਆਪਣਾ ਸਵਾਲ ਜੋੜੋ",
                
                // Footer
                "footer-text": "ਮਿੱਟੀ ਸੇਵਾ - ਸਮਾਰਟ ਫਸਲ ਸलਾਹ ਸਿਸਟਮ © 2023 | ਪੰਜਾਬ ਸਰਕਾਰ ਲਈ ਵਿਕਸਿਤ",
                "footer-desc": "ਇਹ ਸਿਸਟਮ ਛੋਟੇ ਅਤੇ ਸੀਮਾਂਤ ਕਿਸਾਨਾਂ ਲਈ ਏਆਈ-ਸੰਚਾਲਿਤ ਸਲਾਹ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ",
                
                // Modals
                "signin-modal-title": "ਸਾਈਨ ਇਨ",
                "email-label": "ਈਮੇਲ ਪਤਾ",
                "password-label": "ਪਾਸਵਰਡ",
                "signin-button": "ਸਾਈਨ ਇਨ",
                "no-account-text": "ਖਾਤਾ ਨਹੀਂ ਹੈ?",
                "register-link": "ਇੱਥੇ ਰਜਿਸਟਰ ਕਰੋ",
                "about-modal-title": "ਮਿੱਟੀ ਸੇਵਾ ਬਾਰੇ",
                "about-text1": "ਮਿੱਟੀ ਸੇਵਾ ਇੱਕ ਏਆਈ-ਸੰਚਾਲਿਤ ਫਸਲ ਸलਾਹ ਪ੍ਰਣਾਲੀ ਹੈ ਜੋ ਪੰਜਾਬ ਵਿੱਚ ਛੋਟੇ ਅਤੇ ਸੀਮਾਂਤ ਕਿਸਾਨਾਂ ਲਈ ਤਿਆਰ ਕੀਤੀ ਗਈ ਹੈ। ਸਾਡਾ ਸਿਸਟਮ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ:",
                "about-list1": "ਨਿੱਜੀ ਫਸਲ ਸलਾਹ",
                "about-list2": "ਮੌਸਮ ਦੀ ਭਵਿੱਖਬਾਣੀ ਅਤੇ ਚੇਤਾਵਨੀਆਂ",
                "about-list3": "ਕੀੜੇ ਅਤੇ ਬਿਮਾਰੀ ਦੀ ਪਛਾਣ",
                "about-list4": "ਮਿੱਟੀ ਦੀ ਸਿਹਤ ਪ੍ਰਬੰਧਨ",
                "about-list5": "ਬਾਜ਼ਾਰ ਮੁੱਲ ਜਾਣਕਾਰੀ",
                "about-list6": "ਖਾਦ ਅਨੁਸੂਚੀ",
                "about-list7": "ਸਿੰਜਾਈ ਮਾਰਗਦਰਸ਼ਨ",
                "about-list8": "ਕਮਿਊਨਿਟੀ ਜਾਣਕਾਰੀ ਸਾਂਝੀ ਕਰਨਾ",
                "about-list9": "ਫਸਲ ਚਕਰ ਸਿਫਾਰਸ਼ਾਂ",
                "about-list10": "ਸਰਕਾਰੀ ਯੋਜਨਾ ਜਾਣਕਾਰੀ",
                "about-text2": "ਸਾਡਾ ਮਿਸ਼ਨ ਟੈਕਨਾਲੌਜੀ-ਸੰਚਾਲਿਤ ਹੱਲਾਂ ਨਾਲ ਕਿਸਾਨਾਂ ਨੂੰ ਸਸ਼ਕਤ ਬਣਾਉਣਾ ਹੈ ਤਾਂਜੋ ਉਪਜ ਵਿੱਚ ਸੁਧਾਰ ਹੋਵੇ, ਲਾਗਤ ਘਟੇ ਅਤੇ ਲਾਭਦਾਇਕਤਾ ਵਧੇ।",
                
                // Offline message
                "offline-text": "ਤੁਸੀਂ ਵਰਤਮਾਨ ਵਿੱਚ ਔਫਲਾਈਨ ਹੋ। ਕੁਝ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਸੀਮਿਤ ਹੋ ਸਕਦੀਆਂ ਹਨ।",
                
                // Chatbot responses
                "chat-what-to-sow": "ਇਸ ਸੀਜ਼ਨ ਵਿੱਚ ਕੀ ਬੋਵਾਂ?",
                "chat-pest-problems": "ਕੀੜੇ ਦੀਆਂ ਸਮੱਸਿਆਵਾਂ",
                "chat-fertilizer-advice": "ਖਾਦ ਸਲਾਹ",
                "chat-weather-impact": "ਮੌਸਮ ਦਾ ਪ੍ਰਭਾਵ",
                "chat-tell-more-wheat": "ਕਣਕ ਦੀ ਖੇਤੀ ਬਾਰੇ ਹੋਰ ਦੱਸੋ",
                "chat-best-crops": "ਅਗਲੇ ਸੀਜ਼ਨ ਲਈ ਸਭ ਤੋਂ ਵਧੀਆ ਫਸਲਾਂ",
                "chat-improve-soil": "ਮਿੱਟੀ ਦੀ ਸਿਹਤ ਕਿਵੇਂ ਸੁਧਾਰੀ ਜਾਵੇ",
                "chat-wheat-info": "ਕਣਕ ਇੱਕ ਰਬੀ ਸੀਜ਼ਨ ਦੀ ਫਸਲ ਹੈ। ਪੰਜਾਬ ਵਿੱਚ ਬਿਜਾਈ ਦਾ ਆਦਰਸ਼ ਸਮਾਂ ਅਕਤੂਬਰ ਦੇ ਅੰਤ ਤੋਂ ਨਵੰਟਰ ਤੱਕ ਹੈ। ਸਿਫਾਰਸ਼ ਕੀਤੀਆਂ ਕਿਸਮਾਂ: HD-2967, PBW-725, ਅਤੇ WH-1105। ਮੌਜੂਦਾ ਬਾਜ਼ਾਰ ਮੁੱਲਾਂ ਦੇ ਆਧਾਰ 'ਤੇ, ਕਣਕ ₹2,100/qt 'ਤੇ ਉਪਰ ਵੱਲ ਰੁਝਾਨ ਦੇ ਨਾਲ ਵਪਾਰ ਕਰ ਰਹੀ ਹੈ।",
                "chat-rice-info": "ਚਾਵਲ ਖ਼ਰੀਫ਼ ਸੀਜ਼ਨ ਦੀ ਫਸਲ ਹੈ। ਪੰਜਾਬ ਵਿੱਚ ਬਿਜਾਈ ਦਾ ਆਦਰਸ਼ ਸਮਾਂ ਜੂਨ ਹੈ। ਸਿਫਾਰਸ਼ ਕੀਤੀਆਂ ਕਿਸਮਾਂ: PR-126, PR-121, ਅਤੇ Pusa-44। ਨਿਰੰਤਰ ਪਾਣੀ ਦੀ ਸਪਲਾਈ ਦੀ ਲੋੜ ਹੈ। ਜੇਕਰ ਤੁਸੀਂ ਦਿਲਚਸਪੀ ਰੱਖਦੇ ਹੋ ਤਾਂ ਮੈਂ ਪਾਣੀ ਪ੍ਰਬੰਧਨ ਤਕਨੀਕਾਂ ਬਾਰੇ ਵਿਸਤ੍ਰਿਤ ਜਾਣਕਾਰੀ ਦੇ ਸਕਦਾ ਹਾਂ।",
                "chat-cotton-info": "ਕਪਾਹ ਇੱਕ ਖ਼ਰੀਫ਼ ਫਸਲ ਹੈ। ਗੁਲਾਬੀ ਬੋਲਵਰਮ ਇੱਕ ਪ੍ਰਮੁੱਖ ਕੀੜਾ ਹੈ - ਸਿਫਾਰਸ਼ ਕੀਤੇ ਫੇਰੋਮੋਨ ਜਾਲ ਦੀ ਵਰਤੋਂ ਕਰੋ। ਸਿਫਾਰਸ਼ ਕੀਤੀਆਂ ਕਿਸਮਾਂ: ਬੀਟੀ ਕਪਾਹ ਹਾਈਬ੍ਰਿਡ ਜਿਵੇਂ ਕਿ RCH-776 ਅਤੇ MRC-7351। ਮੌਜੂਦਾ ਬਾਜ਼ਾਰ ਮੁੱਲ ₹6,500/qt 'ਤੇ ਅਨੁਕੂਲ ਹਨ।",
                "chat-maize-info": "ਮੱਕੀ ਖ਼ਰੀਫ਼ ਅਤੇ ਰਬੀ ਦੋਵਾਂ ਮੌਸਮਾਂ ਵਿੱਚ ਉਗਾਈ ਜਾ ਸਕਦੀ ਹੈ। ਖ਼ਰੀਫ਼ ਲਈ: ਜੂਨ-ਜੁਲਾਈ ਵਿੱਚ ਬੋਵੋ। ਰਬੀ ਲਈ: ਅਕਤੂਬਰ-ਨਵੰਬਰ ਵਿੱਚ ਬੋਵੋ। ਸਿਫਾਰਸ਼ ਕੀਤੀਆਂ ਕਿਸਮਾਂ: PMH-1, J-1006। ਮੌਜੂਦਾ ਕੀਮਤਾਂ ₹1,700/qt 'ਤੇ ਹਨ ਪਰ ਘਟਦਾ ਰੁਝਾਨ ਹੈ।",
                "chat-pest-advice": "ਆਮ ਕੀੜਿਆਂ ਲਈ, ਮੈਂ ਇੰਟੀਗ੍ਰੇਟੇਡ ਪੈਸਟ ਮੈਨੇਜਮੈਂਟ ਤਕਨੀਕਾਂ ਦੀ ਵਰਤੋਂ ਕਰਨ ਦੀ ਸਿਫਾਰਸ਼ ਕਰਦਾ ਹਾਂ। ਇਸ ਵਿੱਚ ਸੱਭਿਆਚਾਰਕ ਅਭਿਆਸ, ਜੈਵਿਕ ਨਿਯੰਤਰਣ ਅਤੇ ਟਾਰਗੇਟਿਡ ਕੀਟਨਾਸ਼ਕ ਦੀ ਵਰਤੋਂ ਸ਼ਾਮਲ ਹੈ। ਕੀ ਤੁਸੀਂ ਦੱਸ ਸਕਦੇ ਹੋ ਕਿ ਤੁਸੀਂ ਕਿਸ ਫਸਲ ਅਤੇ ਕੀੜੇ ਨਾਲ ਨਜਿੱਠ ਰਹੇ ਹੋ?",
                "chat-fertilizer-advice-detail": "ਖਾਦ ਦੀਆਂ ਲੋੜਾਂ ਤੁਹਾਡੇ ਮਿੱਟੀ ਦੇ ਸਿਹਤ ਅਤੇ ਫਸਲ ਦੀ ਕਿਸਮ 'ਤੇ ਨਿਰਭਰ ਕਰਦੀਆਂ ਹਨ। ਤੁਹਾਡੇ ਮਿੱਟੀ ਟੈਸਟ ਦੇ ਨਤੀਜਿਆਂ ਦੇ ਆਧਾਰ 'ਤੇ, ਮੈਂ ਜ਼ਰੂਰਤ ਪੈਣ 'ਤੇ ਵਾਧੂ ਮਾਈਕ੍ਰੋਨਿਉਟ੍ਰੀਐਂਟਸ ਵਾਲੇ ਸੰਤੁਲਿਤ NPK ਖਾਦ ਦੀ ਸਿਫਾਰਸ਼ ਕਰਦਾ ਹਾਂ। ਕੀ ਤੁਸੀਂ ਕਿਸੇ ਖਾਸ ਫਸਲ ਲਈ ਖਾਸ ਸਿਫਾਰਸ਼ਾਂ ਚਾਹੋਗੇ?",
                "chat-weather-advice": "ਪੰਜਾਬ ਵਿੱਚ ਮੌਜੂਦਾ ਮੌਸਮ ਰ�बੀ ਫਸਲਾਂ ਲਈ ਅਨੁਕੂਲ ਹੈ। ਅਗਲੇ 3 ਦਿਨਾਂ ਵਿੱਚ ਹਲਕੀ ਬਾਰਿਸ਼ ਦੀ ਉਮੀਦ ਹੈ। ਆਪਣੇ ਖੇਤਾਂ ਵਿੱਚ ਢੁਕਵੀਂ ਨਿਰਾਸੀ ਨਿਸ਼ਚਿਤ ਕਰੋ। 5 ਦਿਨਾਂ ਵਿੱਚ ਭਾਰੀ ਬਾਰਿਸ਼ ਹੋਣ ਦੀ ਉਮੀਦ ਹੈ, ਇਸਲਈ ਨਿਰਾਸੀ ਸਿਸਟਮਾਂ ਨੂੰ ਪਹਿਲਾਂ ਤੋਂ ਤਿਆਰ ਕਰੋ।",
                "chat-soil-improvement": "ਆਪਣੇ ਮਿੱਟੀ ਦੀ ਸਿਹਤ ਵਿੱਚ ਸੁਧਾਰ ਕरਨ ਲਈ, ਮੈਂ ਸਿਫਾਰਸ਼ ਕਰਦਾ ਹਾਂ: 1) ਕੰਪੋਸਟ ਜਾਂ ਖਾਦ ਦੇ ਜ਼ਰੀਏ ਜੈਵਿਕ ਪਦਾਰਥ ਜੋੜਨਾ, 2) ਫਸਲ ਚਕਰ ਦਾ ਅਭਿਆਸ ਕਰਨਾ, 3) ਹਰੀ �खਾਦ ਵਾਲੀਆਂ ਫਸਲਾਂ ਦੀ ਵਰਤੋਂ ਕਰਨਾ, ਅਤੇ 4) ਰਸਾਇਣਿਕ ਖਾਦ ਦੀ ਵਰਤੋਂ ਨੂੰ ਘੱਟ ਤੋਂ ਘੱਟ ਕਰਨਾ। ਤੁਹਾਡੇ ਮਿੱਟੀ ਟੈਸਟ ਦੇ ਆਧਾਰ 'ਤੇ, ਤੁਹਾਨੂੰ ਫਾਸਫੋਰਸ ਦੇ ਪੱਧਰਾਂ ਨੂੰ ਵਧਾਉਣ 'ਤੇ ਧਿਆਨ ਦੇਣਾ ਚਾਹੀਦਾ ਹੈ।",
                "chat-season-suggestion": "ਮੌਜੂਦਾ ਮੌਸਮ ਦੇ ਆਧਾਰ 'ਤੇ, ਇੱਥੇ ਕੁਝ ਬਿਜਾਈ ਦੇ ਸੁਝਾਅ ਦਿੱਤੇ ਗਏ ਹਨ: ਕਣਕ, ਜੌ, ਸਰ੍ਹੋਂ, ਛੋਲੇ ਅਤੇ ਮਟਰ ਰਬੀ ਦੇ ਮੌਸਮ ਲਈ ideਹੀ ਹਨ। ਪੰਜਾਬ ਵਿੱਚ ਤੁਹਾਡੇ ਟਿਕਾਣੇ ਨੂੰ ਦੇਖਦੇ ਹੋਏ, ਮੈਂ कਣਕ ਦੀ ਸਿਫਾਰਸ਼ ਕਰਾਂਗਾ ਕਿਉਂਕਿ ਇਹ ਇਸ ਮੌਸਮ ਵਿੱਚ ਸਭ ਤੋਂ ਲਾਭਦਾਇਕ ਹੈ।",
                "chat-default-response": "ਮੈਂ ਤੁਹਾਡੀ ਮਦਦ ਕਰਨ ਲਈ ਇੱਥੇ ਹਾਂ! ਕੀ ਤੁਸੀਂ ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੀ query ਬਾਰੇ ਹੋਰ ਵੇਰਵੇ ਦੇ ਸਕਦੇ ਹੋ? ਉਦਾਹਰਣ ਲਈ, ਤੁਸੀਂ ਖਾਸ ਫਸਲਾਂ, ਕੀੜੇ ਦੀਆਂ ਸਮੱਸਿਆਵਾਂ, ਮੌਸਮ ਦੇ ਪ੍ਰਭਾਵ, ਜਾਂ ਖੇਤੀ ਦੀਆਂ ਤਕਨੀਕਾਂ ਬਾਰے ਪੁੱਛ ਸਕਦੇ ਹੋ।"
            },
            ta: {
                // Tamil translations would go here
            }
        };

        // ========== AUTHENTICATION ==========
        let isLoggedIn = false;
        let currentUser = null;

        // DOM Elements
        const signinBtn = document.getElementById("signin-btn");
        const signinModal = document.getElementById("signin-modal");
        const closeBtns = document.querySelectorAll(".close-btn");
        const signinForm = document.getElementById("signin-form");

        // Check authentication status
        function checkAuthStatus() {
            const savedUser = localStorage.getItem("currentUser");
            const savedAuthStatus = localStorage.getItem("isLoggedIn");

            if (savedUser && savedAuthStatus === "true") {
                isLoggedIn = true;
                currentUser = JSON.parse(savedUser);
                updateUIAfterLogin();
            }
        }

        // Update UI after login
        function updateUIAfterLogin() {
            if (isLoggedIn && currentUser) {
                signinBtn.innerHTML = `<i class="fas fa-user"></i> ${currentUser.name}`;
                signinBtn.onclick = function (e) {
                    e.preventDefault();
                    logout();
                };
                enablePremiumFeatures();
            }
        }

        // Enable premium features
        function enablePremiumFeatures() {
            // Enable any premium features here
            console.log("Premium features enabled for:", currentUser.name);
        }

        // Logout function
        function logout() {
            isLoggedIn = false;
            currentUser = null;
            localStorage.removeItem("currentUser");
            localStorage.removeItem("isLoggedIn");
            signinBtn.innerHTML = '<i class="fas fa-user"></i> ' + translations[currentLanguage]['signin-text'];
            signinBtn.onclick = function () {
                signinModal.style.display = "flex";
            };
            alert(translations[currentLanguage]['signin-text'] + " status: Logged out successfully.");
        }

        // Validate email
        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }

        // Event listeners for authentication
        signinBtn.addEventListener('click', (e) => {
            e.preventDefault();
            signinModal.style.display = "flex";
        });

        closeBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                signinModal.style.display = "none";
            });
        });

        window.addEventListener('click', (e) => {
            if (e.target === signinModal) signinModal.style.display = "none";
        });

        // Sign in form submission
        signinForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            
            if (!validateEmail(email)) {
                alert("Please enter a valid email address.");
                return;
            }
            
            if (password.length < 6) {
                alert("Password must be at least 6 characters long.");
                return;
            }
            
            // Simulate successful login
            isLoggedIn = true;
            currentUser = { email, name: email.split('@')[0], token: 'demo-token' };
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            localStorage.setItem('isLoggedIn', 'true');
            updateUIAfterLogin();
            
            alert("Sign in successful! Welcome to Mitti Sewa.");
            
            signinModal.style.display = "none";
            signinForm.reset();
        });

        // Initialize auth on page load
        document.addEventListener('DOMContentLoaded', checkAuthStatus);

        // ========== GLOBAL VARIABLES ==========
        let currentLanguage = 'en';
        let recognition = null;

        // ========== DOM ELEMENTS ==========
        const aboutBtn = document.getElementById("about-btn");
        const aboutModal = document.getElementById("about-modal");
        const sendBtn = document.getElementById("send-btn");
        const voiceBtn = document.getElementById("voice-btn");
        const userInput = document.getElementById("user-input");
        const chatContainer = document.getElementById("chat-container");
        const cropSelect = document.getElementById("crop-select");
        const showScheduleBtn = document.getElementById("show-schedule-btn");
        const fertilizerSchedule = document.getElementById("fertilizer-schedule");
        const pestImage = document.getElementById("pest-image");
        const analyzeBtn = document.getElementById("analyze-btn");
        const pestResult = document.getElementById("pest-result");
        const pestPreview = document.getElementById("pest-preview");
        const languageSelect = document.getElementById("language-select");
        const offlineIndicator = document.getElementById("offline-indicator");
        const arViewBtn = document.querySelector(".ar-view-btn");

        // ========== INITIALIZATION ==========
        function initApp() {
            updateWeatherData();
            updateMarketPrices();
            setInterval(updateWeatherData, 300000); // Update weather every 5 minutes
            setInterval(updateMarketPrices, 600000); // Update prices every 10 minutes
            
            if (!navigator.onLine) {
                showOfflineIndicator();
            }
            
            // Load language preference
            const savedLanguage = localStorage.getItem('language') || 'en';
            changeLanguage(savedLanguage);
            languageSelect.value = savedLanguage;
            
            // Add event listeners to suggestion buttons
            updateSuggestionButtons();
        }

        // Update suggestion buttons based on current language
        function updateSuggestionButtons() {
            const suggestionsContainer = document.querySelector('.suggestions');
            if (!suggestionsContainer) return;
            
            suggestionsContainer.innerHTML = `
                <button class="suggestion-btn">${translations[currentLanguage]['chat-what-to-sow']}</button>
                <button class="suggestion-btn">${translations[currentLanguage]['chat-pest-problems']}</button>
                <button class="suggestion-btn">${translations[currentLanguage]['chat-fertilizer-advice']}</button>
                <button class="suggestion-btn">${translations[currentLanguage]['chat-weather-impact']}</button>
            `;
            
            // Add event listeners to suggestion buttons
            document.querySelectorAll('.suggestion-btn').forEach(button => {
                button.addEventListener('click', function() {
                    userInput.value = this.textContent;
                    sendMessage();
                });
            });
        }

        // ========== LANGUAGE HANDLING ==========
        function changeLanguage(lang) {
            currentLanguage = lang;
            localStorage.setItem('language', lang);
            
            // Update all text elements
            for (const [key, value] of Object.entries(translations[lang])) {
                const element = document.getElementById(key);
                if (element) {
                    element.textContent = value;
                }
            }
            
            // Update placeholders
            const userInput = document.getElementById('user-input');
            if (userInput) {
                if (lang === 'en') {
                    userInput.placeholder = "Type your question here...";
                } else if (lang === 'hi') {
                    userInput.placeholder = "अपना प्रश्न यहाँ टाइप करें...";
                } else if (lang === 'pa') {
                    userInput.placeholder = "ਆਪਣਾ ਸਵਾਲ ਇੱਥੇ ਟਾਈਪ ਕਰੋ...";
                }
            }
            
            // Update suggestion buttons
            updateSuggestionButtons();
        }

        // ========== WEATHER DATA ==========
        function updateWeatherData() {
            // Simulated API call for weather data
            const weatherData = {
                temp: Math.round(20 + Math.random() * 15), // Random temp between 20-35°C
                desc: ["Sunny", "Partly Cloudy", "Cloudy", "Light Rain"][Math.floor(Math.random() * 4)],
                wind: Math.round(5 + Math.random() * 15) + " km/h",
                humidity: Math.round(30 + Math.random() * 40) + "%",
                pressure: Math.round(1000 + Math.random() * 20) + " hPa",
                location: "Punjab"
            };
            
            document.getElementById("weather-temp").textContent = `${weatherData.temp}°C`;
            document.getElementById("weather-desc").textContent = weatherData.desc;
            document.getElementById("weather-wind").textContent = weatherData.wind;
            document.getElementById("weather-humidity").textContent = weatherData.humidity;
            document.getElementById("weather-pressure").textContent = weatherData.pressure;
        }

        // ========== MARKET PRICES ==========
        function updateMarketPrices() {
            // Simulated market data updates
            const crops = ["wheat", "rice", "cotton", "maize"];
            
            crops.forEach(crop => {
                const basePrice = {
                    wheat: 2100,
                    rice: 1850,
                    cotton: 6500,
                    maize: 1700
                };
                
                // Random price change between -5% to +5%
                const changePercent = (Math.random() * 10 - 5).toFixed(1);
                const newPrice = Math.round(basePrice[crop] * (1 + changePercent / 100));
                
                document.getElementById(`${crop}-price`).textContent = newPrice.toLocaleString();
                document.getElementById(`${crop}-trend`).textContent = `${Math.abs(changePercent)}%`;
                
                const trendElement = document.getElementById(`${crop}-price`).closest('.price-item').querySelector('.price-trend');
                if (parseFloat(changePercent) < 0) {
                    trendElement.classList.add('down');
                    trendElement.innerHTML = `<i class="fas fa-arrow-down"></i> ${Math.abs(changePercent)}%`;
                } else {
                    trendElement.classList.remove('down');
                    trendElement.innerHTML = `<i class="fas fa-arrow-up"></i> ${changePercent}%`;
                }
            });
        }

        // ========== CHAT FUNCTIONALITY ==========
        function sendMessage() {
            const message = userInput.value.trim();
            if (message === "") return;
            
            addMessageToChat(message, "user");
            userInput.value = "";

            // Show thinking indicator
            const thinkingElement = document.createElement("div");
            thinkingElement.classList.add("message", "bot-message", "thinking");
            
            if (currentLanguage === 'en') {
                thinkingElement.innerHTML = 'Thinking <div class="dot-flashing"></div>';
            } else if (currentLanguage === 'hi') {
                thinkingElement.innerHTML = 'सोच रहा हूं <div class="dot-flashing"></div>';
            } else if (currentLanguage === 'pa') {
                thinkingElement.innerHTML = 'ਸੋਚ ਰਿਹਾ ਹਾਂ <div class="dot-flashing"></div>';
            }
            
            chatContainer.appendChild(thinkingElement);
            chatContainer.scrollTop = chatContainer.scrollHeight;

            // Get bot response
            setTimeout(() => {
                chatContainer.removeChild(thinkingElement);
                const response = getBotResponse(message);
                addMessageToChat(response, "bot");
            }, 1500);
        }

        function getBotResponse(message) {
            const lowerMsg = message.toLowerCase();
            
            // English responses
            if (currentLanguage === 'en') {
                if (lowerMsg.includes("unable to decide") || lowerMsg.includes("what to sow") || lowerMsg.includes("what crop")) {
                    const month = new Date().getMonth() + 1;
                    let season = "";
                    let suggestions = "";
                    
                    if (month >= 10 || month <= 2) {
                        season = "Rabi (winter)";
                        suggestions = "Wheat, barley, mustard, gram, and peas are ideal for Rabi season. Considering your location in Punjab, I would recommend wheat as it's the most profitable this season.";
                    } else if (month >= 3 && month <= 6) {
                        season = "Zaid (summer)";
                        suggestions = "For Zaid season, you can consider watermelon, muskmelon, cucumber, or fodder crops. Given the current market prices, cucumbers might be a good choice.";
                    } else {
                        season = "Kharif (monsoon)";
                        suggestions = "Rice, maize, cotton, soybean, and sugarcane are good for Kharif season. Based on soil health data, I'd recommend rice or cotton for your farm.";
                    }
                    
                    return `Based on the current season (${season}), here are some sowing suggestions: ${suggestions} Would you like more specific recommendations based on your soil type or market demand?`;
                } else if (lowerMsg.includes("wheat")) {
                    if (lowerMsg.includes("pest") || lowerMsg.includes("disease")) {
                        return "For wheat, common pests include aphids and rust diseases. Use recommended pesticides like Imidacloprid for aphids and Propiconazole for rust. Always follow the recommended dosage. I can also provide organic alternatives if you're interested.";
                    } else if (lowerMsg.includes("fertilizer") || lowerMsg.includes("nutrient")) {
                        return "Wheat requires balanced fertilization. Recommended: 120 kg N, 60 kg P2O5, and 40 kg K2O per hectare. Apply 1/3 N and full P & K as basal dose, remaining N in two splits. Based on your soil report, you might need additional phosphorus.";
                    } else if (lowerMsg.includes("water") || lowerMsg.includes("irrigation")) {
                        return "Wheat typically requires 4-6 irrigations. Critical stages: crown root initiation (21-25 DAS), tillering (40-45 DAS), flowering, and grain filling stages. The next irrigation is recommended in 3 days based on current weather conditions.";
                    } else {
                        return translations[currentLanguage]['chat-wheat-info'];
                    }
                } else if (lowerMsg.includes("rice")) {
                    return translations[currentLanguage]['chat-rice-info'];
                } else if (lowerMsg.includes("cotton")) {
                    return translations[currentLanguage]['chat-cotton-info'];
                } else if (lowerMsg.includes("maize")) {
                    return translations[currentLanguage]['chat-maize-info'];
                } else if (lowerMsg.includes("weather") || lowerMsg.includes("rain")) {
                    return translations[currentLanguage]['chat-weather-advice'];
                } else if (lowerMsg.includes("soil") || lowerMsg.includes("health")) {
                    return translations[currentLanguage]['chat-soil-improvement'];
                } else if (lowerMsg.includes("price") || lowerMsg.includes("market")) {
                    return "Current market prices: Wheat ₹2100/qt (↑2.5%), Rice ₹1850/qt (↓1.2%), Cotton ₹6500/qt (↑4.1%), Maize ₹1700/qt (↓0.8%). Prices are expected to remain stable for wheat and cotton but may decrease for rice and maize in the coming weeks.";
                } else if (lowerMsg.includes("government") || lowerMsg.includes("scheme")) {
                    return "Several government schemes are available: PM-KISAN (₹6000/year), Soil Health Card scheme, and subsidies for drip irrigation. Based on your profile, you qualify for all these schemes. Contact your local agriculture office for details or would you like me to help with the application process?";
                } else if (lowerMsg.includes("hello") || lowerMsg.includes("hi")) {
                    return "Hello! I'm your crop advisory assistant. I can help you with crop selection, pest management, weather information, market prices, and government schemes. What would you like to know today?";
                } else if (lowerMsg.includes("pest")) {
                    return translations[currentLanguage]['chat-pest-advice'];
                } else if (lowerMsg.includes("fertilizer")) {
                    return translations[currentLanguage]['chat-fertilizer-advice-detail'];
                } else {
                    return translations[currentLanguage]['chat-default-response'];
                }
            } 
            // Hindi responses
            else if (currentLanguage === 'hi') {
                if (lowerMsg.includes("unable to decide") || lowerMsg.includes("what to sow") || lowerMsg.includes("kya boyen")) {
                    const month = new Date().getMonth() + 1;
                    let season = "";
                    let suggestions = "";
                    
                    if (month >= 10 || month <= 2) {
                        season = "रबी (सर्दियों का मौसम)";
                        suggestions = "गेहूं, जौ, सरसों, चना और मटर रबी के मौसम के लिए आदर्श हैं। पंजाब में आपके स्थान को देखते हुए, मैं गेहूं की सलाह दूंगा क्योंकि यह इस मौसम में सबसे अधिक लाभदायक है।";
                    } else if (month >= 3 && month <= 6) {
                        season = "जायद (गर्मियों का मौसम)";
                        suggestions = "जायद के मौसम के लिए, आप तरबूज, खरबूजा, ककड़ी या चारा फसलों पर विचार कर सकते हैं। वर्तमान बाजार कीमतों को देखते हुए, ककड़ी एक अच्छा विकल्प हो सकता है।";
                    } else {
                        season = "खरीफ (मानसून का मौसम)";
                        suggestions = "चावल, मक्का, कपास, सोयाबीन और गन्ना खरीफ के मौसम के लिए अच्छे हैं। मिट्टी के स्वास्थ्य डेटा के आधार पर, मैं आपके खेत के लिए चावल या कपास की सलाह दूंगा।";
                    }
                    
                    return `वर्तमान मौसम (${season}) के आधार पर, यहां कुछ बुआई सुझाव दिए गए हैं: ${suggestions} क्या आप अपनी मिट्टी के प्रकार या बाजार की मांग के आधार पर अधिक विशिष्ट सिफारिशें चाहेंगे?`;
                } else if (lowerMsg.includes("wheat") || lowerMsg.includes("gehu")) {
                    return translations[currentLanguage]['chat-wheat-info'];
                } else if (lowerMsg.includes("rice") || lowerMsg.includes("chawal")) {
                    return translations[currentLanguage]['chat-rice-info'];
                } else if (lowerMsg.includes("cotton") || lowerMsg.includes("kapas")) {
                    return translations[currentLanguage]['chat-cotton-info'];
                } else if (lowerMsg.includes("maize") || lowerMsg.includes("makka")) {
                    return translations[currentLanguage]['chat-maize-info'];
                } else if (lowerMsg.includes("weather") || lowerMsg.includes("mausam")) {
                    return translations[currentLanguage]['chat-weather-advice'];
                } else if (lowerMsg.includes("soil") || lowerMsg.includes("mitti")) {
                    return translations[currentLanguage]['chat-soil-improvement'];
                } else if (lowerMsg.includes("price") || lowerMsg.includes("bhav") || lowerMsg.includes("bajar")) {
                    return "वर्तमान बाजार मूल्य: गेहूं ₹2100/qt (↑2.5%), चावल ₹1850/qt (↓1.2%), कपास ₹6500/qt (↑4.1%), मक्का ₹1700/qt (↓0.8%)। गेहूं और कपास के लिए कीमतें स्थिर रहने की उम्मीद है, लेकिन आने वाले हफ्तों में चावल और मक्का की कीमतों में कमी आ सकती है।";
                } else if (lowerMsg.includes("government") || lowerMsg.includes("sarkar") || lowerMsg.includes("yojana")) {
                    return "कई सरकारी योजनाएं उपलब्ध हैं: पीएम-किसान (₹6000/वर्ष), मृदा स्वास्थ्य कारड योजना, और ड्रिप सिंचाई के लिए सब्सिडी। आपके प्रोफाइल के आधार पर, आप इन सभी योजनाओं के लिए योग्य हैं। विवरण के लिए अपने स्थानीय कृषि कार्यालय से संपर्क करें या क्या आप चाहेंगे कि मैं आवेदन प्रक्रिया में मदद करूं?";
                } else if (lowerMsg.includes("hello") || lowerMsg.includes("hi") || lowerMsg.includes("namaste")) {
                    return "नमस्ते! मैं आपका फसल सलाह सहायक हूं। मैं आपकी फसल चयन, कीट प्रबंधन, मौसम जानकारी, बाजार मूल्य और सरकारी योजनाओं में मदद कर सकता हूं। आज आप क्या जानना चाहेंगे?";
                } else if (lowerMsg.includes("pest") || lowerMsg.includes("keet")) {
                    return translations[currentLanguage]['chat-pest-advice'];
                } else if (lowerMsg.includes("fertilizer") || lowerMsg.includes("urvarak")) {
                    return translations[currentLanguage]['chat-fertilizer-advice-detail'];
                } else {
                    return translations[currentLanguage]['chat-default-response'];
                }
            }
            // Punjabi responses
            else if (currentLanguage === 'pa') {
                if (lowerMsg.includes("unable to decide") || lowerMsg.includes("what to sow") || lowerMsg.includes("ki pauna")) {
                    const month = new Date().getMonth() + 1;
                    let season = "";
                    let suggestions = "";
                    
                    if (month >= 10 || month <= 2) {
                        season = "ਰਬੀ (ਸਰਦੀਆਂ ਦਾ ਮੌਸਮ)";
                        suggestions = "ਕਣਕ, ਜੌ, ਸਰੋਂ, ਛੋਲੇ ਅਤੇ ਮਟਰ ਰਬੀ ਦੇ ਮੌਸਮ ਲਈ ideਹੀ ਹਨ। ਪੰਜਾਬ ਵਿੱਚ ਤੁਹਾਡੇ ਟਿਕਾਣੇ ਨੂੰ ਦੇਖਦੇ ਹੋਏ, ਮੈਂ ਕਣਕ ਦੀ ਸਿਫਾਰਸ਼ ਕਰਾਂਗਾ ਕਿਉਂਕਿ ਇਹ ਇਸ ਮੌਸਮ ਵਿੱਚ ਸਭ ਤੋਂ ਲਾਭਦਾਇਕ ਹੈ।";
                    } else if (month >= 3 && month <= 6) {
                        season = "ਜ਼ੈਦ (ਗਰਮੀਆਂ ਦਾ ਮੌਸਮ)";
                        suggestions = "ਜ਼ੈਦ ਦੇ ਮੌਸਮ ਲਈ, ਤੁਸੀਂ ਤਰਬੂਜ, ਖਰਬੂਜਾ, ਖੀਰਾ ਜਾਂ ਚਾਰਾ ਫਸਲਾਂ ਬਾਰੇ ਵਿਚਾਰ ਕਰ ਸਕਦੇ ਹੋ। ਮੌਜੂਦਾ ਬਾਜ਼ਾਰ ਦੀਆਂ ਕੀਮਤਾਂ ਨੂੰ ਦੇਖਦੇ ਹੋਏ, ਖੀਰੇ ਇੱਕ ਚੰਗਾ ਵਿਕਲਪ ਹੋ ਸਕਦੇ ਹਨ۔";
                    } else {
                        season = "ਖ਼ਰੀਫ਼ (ਮਾਨਸੂਨ ਦਾ ਮੌਸਮ)";
                        suggestions = "ਚਾਵਲ, ਮੱਕੀ, ਕਪਾਹ, ਸੋਯਾਬੀਨ ਅਤੇ ਗੰਨਾ ਖ਼ਰੀਫ਼ ਦੇ ਮੌਸਮ ਲਈ ਚੰਗੇ ਹਨ। ਮਿੱਟੀ ਦੇ ਸਿਹਤ ਡੇਟਾ ਦੇ ਆਧਾਰ 'ਤੇ, ਮੈਂ ਤੁਹਾਡੇ ਖੇਤ �ਲਈ ਚਾਵਲ ਜਾਂ ਕਪਾਹ ਦੀ ਸਿਫਾਰਸ਼ ਕਰਾਂਗਾ।";
                    }
                    
                    return `ਮੌਜੂਦਾ ਮੌਸਮ (${season}) ਦੇ ਆਧਾਰ 'ਤੇ, ਇੱਥੇ ਕੁਝ ਬਿਜਾਈ ਦੇ ਸੁਝਾਅ ਦਿੱਤੇ ਗਏ ਹਨ: ${suggestions} ਕੀ ਤੁਸੀਂ ਆਪਣੀ ਮਿੱਟੀ ਦੀ ਕਿਸਮ ਜਾਂ ਬਾਜ਼ਾਰ ਦੀ ਮੰਗ ਦੇ ਆਧਾਰ 'ਤੇ ਹੋਰ ਵਿਸ਼ੇਸ਼ ਸਿਫਾਰਸ਼ਾਂ ਨੂੰ ਪਸੰਦ ਕਰੋਗੇ?`;
                } else if (lowerMsg.includes("wheat") || lowerMsg.includes("kana")) {
                    return translations[currentLanguage]['chat-wheat-info'];
                } else if (lowerMsg.includes("rice") || lowerMsg.includes("chawal")) {
                    return translations[currentLanguage]['chat-rice-info'];
                } else if (lowerMsg.includes("cotton") || lowerMsg.includes("kapah")) {
                    return translations[currentLanguage]['chat-cotton-info'];
                } else if (lowerMsg.includes("maize") || lowerMsg.includes("makki")) {
                    return translations[currentLanguage]['chat-maize-info'];
                } else if (lowerMsg.includes("weather") || lowerMsg.includes("mausam")) {
                    return translations[currentLanguage]['chat-weather-advice'];
                } else if (lowerMsg.includes("soil") || lowerMsg.includes("mitti")) {
                    return translations[currentLanguage]['chat-soil-improvement'];
                } else if (lowerMsg.includes("price") || lowerMsg.includes("bhav") || lowerMsg.includes("bajar")) {
                    return "ਮੌਜੂਦਾ ਬਾਜ਼ਾਰ ਮੁੱਲ: ਕਣਕ ₹2100/qt (↑2.5%), ਚਾਵਲ ₹1850/qt (↓1.2%), ਕਤਾਹ ₹6500/qt (↑4.1%), ਮੱਕੀ ₹1700/qt (↓0.8%)। ਕਣਕ ਅਤੇ ਕਪਾਹ ਲਈ ਕੀਮਤਾਂ ਸਥਿਰ ਰਹਿਣ ਦੀ ਉਮੀਦ ਹੈ, ਪਰ ਆਉਣ ਵਾਲੇ ਹਫ਼ਤਿਆਂ ਵਿੱਚ �चावल ਅਤੇ ਮੱਕੀ ਦੀਆਂ ਕੀਮਤਾਂ ਘਟ ਸਕਦੀਆਂ ਹਨ।";
                } else if (lowerMsg.includes("government") || lowerMsg.includes("sarkar") || lowerMsg.includes("yojana")) {
                    return "ਕਈ ਸਰਕਾਰੀ ਯੋਜਨਾਵਾਂ ਉਪਲਬਧ ਹਨ: ਪੀਐਮ-ਕਿਸਾਨ (₹6000/ਸਾਲ), ਮਿੱਟੀ ਸਿਹਤ ਕਾਰਡ ਯੋਜਨਾ, ਅਤੇ ਡ੍ਰਿਪ ਸਿੰਜਾਈ ਲਈ ਸਬਸਿਡੀ। ਤੁਹਾਡੇ ਪ੍ਰੋਫਾਈਲ ਦੇ ਆਧਾਰ 'ਤੇ, ਤੁਸੀں ਇਨ੍ਹਾਂ ਸਾਰੀਆਂ ਯੋਜਨਾਵਾਂ ਲਈ ਯੋਗ ਹੋ। ਵੇਰਵੇ ਲਈ ਆਪਣੇ ਸਥਾਨਕ ਕ੍ਰਿਸ਼ੀ ਦਫ਼ਤਰ ਨਾਲ ਸੰਪਰਕ ਕਰੋ ਜਾਂ ਕੀ ਤੁਸੀਂ ਚਾਹੋਗੇ ਕਿ ਮੈਂ ਅਰਜ਼ੀ ਪ੍ਰਕਿਰਿਆ ਵਿੱਚ ਮਦਦ ਕਰਾਂ?";
                } else if (lowerMsg.includes("hello") || lowerMsg.includes("hi") || lowerMsg.includes("sat sri akal")) {
                    return "ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਤੁਹਾਡਾ ਫਸਲ ਸलਾਹ ਸहਾਇਕ ਹਾਂ। ਮੈਂ ਤੁਹਾਡੀ ਫਸਲ ਚੋਣ, ਕੀੜੇ ਪ੍ਰਬੰਧਨ, ਮੌਸਮ ਜਾਣਕਾਰी, ਬਾਜ਼ਾਰ ਮੁੱਲ ਅਤੇ ਸरਕਾਰੀ ਯੋਜਨਾਵਾਂ ਵਿੱਚ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ। ਅੱਜ ਤੁਸੀਂ कੀ जानना ਚਾਹੋਗੇ?";
                } else if (lowerMsg.includes("pest") || lowerMsg.includes("keer")) {
                    return translations[currentLanguage]['chat-pest-advice'];
                } else if (lowerMsg.includes("fertilizer") || lowerMsg.includes("khad")) {
                    return translations[currentLanguage]['chat-fertilizer-advice-detail'];
                } else {
                    return translations[currentLanguage]['chat-default-response'];
                }
            }
        }

        function addMessageToChat(message, sender) {
            const messageElement = document.createElement("div");
            messageElement.classList.add("message", `${sender}-message`);
            messageElement.textContent = message;
            
            // Add timestamp
            const timestamp = document.createElement("div");
            timestamp.classList.add("timestamp");
            timestamp.textContent = getCurrentTime();
            messageElement.appendChild(timestamp);
            
            // Add suggestion buttons for bot messages
            if (sender === "bot") {
                const suggestions = document.createElement("div");
                suggestions.classList.add("suggestions");
                
                suggestions.innerHTML = `
                    <button class="suggestion-btn">${translations[currentLanguage]['chat-tell-more-wheat']}</button>
                    <button class="suggestion-btn">${translations[currentLanguage]['chat-best-crops']}</button>
                    <button class="suggestion-btn">${translations[currentLanguage]['chat-improve-soil']}</button>
                `;
                
                // Add event listeners to suggestion buttons
                suggestions.querySelectorAll('.suggestion-btn').forEach(button => {
                    button.addEventListener('click', function() {
                        userInput.value = this.textContent;
                        sendMessage();
                    });
                });
                
                messageElement.appendChild(suggestions);
            }
            
            chatContainer.appendChild(messageElement);
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }

        function getCurrentTime() {
            const now = new Date();
            return `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
        }

        // ========== VOICE RECOGNITION ==========
        function startVoiceRecognition() {
            if ('webkitSpeechRecognition' in window) {
                recognition = new webkitSpeechRecognition();
                recognition.continuous = false;
                recognition.interimResults = false;
                
                if (currentLanguage === 'en') {
                    recognition.lang = 'en-US';
                } else if (currentLanguage === 'hi') {
                    recognition.lang = 'hi-IN';
                } else if (currentLanguage === 'pa') {
                    recognition.lang = 'pa-IN';
                }
                
                recognition.start();
                
                voiceBtn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>';
                
                recognition.onresult = (event) => {
                    userInput.value = event.results[0][0].transcript;
                    recognition.stop();
                    voiceBtn.innerHTML = '<i class="fas fa-microphone"></i>';
                };
                
                recognition.onerror = () => {
                    voiceBtn.innerHTML = '<i class="fas fa-microphone"></i>';
                    
                    if (currentLanguage === 'en') {
                        addMessageToChat("Sorry, I couldn't hear you clearly.", "bot");
                    } else if (currentLanguage === 'hi') {
                        addMessageToChat("क्षमा करें, मैं आपको स्पष्ट रूप से नहीं सुन सका।", "bot");
                    } else if (currentLanguage === 'pa') {
                        addMessageToChat("ਮਾਫ਼ ਕਰਨਾ, ਮੈਂ ਤੁਹਾਨੂੰ ਸਪੱਸ਼ਟ ਸੁਣ ਨਹੀਂ ਸਕਿਆ।", "bot");
                    }
                };
                
                recognition.onend = () => {
                    voiceBtn.innerHTML = '<i class="fas fa-microphone"></i>';
                };
            } else {
                if (currentLanguage === 'en') {
                    addMessageToChat("Voice recognition not supported in your browser.", "bot");
                } else if (currentLanguage === 'hi') {
                    addMessageToChat("आपके ब्राउज़र में voice recognition supported नहीं है।", "bot");
                } else if (currentLanguage === 'pa') {
                    addMessageToChat("ਤੁਹਾਡੇ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਵੌਇਸ ਪਛਾਣ ਸਮਰਥਿਤ ਨਹੀਂ ਹੈ।", "bot");
                }
            }
        }

        // ========== PEST IDENTIFICATION ==========
        function handlePestImageUpload(event) {
            const file = event.target.files[0];
            if (!file) return;
            
            const reader = new FileReader();
            reader.onload = (e) => {
                pestPreview.innerHTML = `<img src="${e.target.result}" alt="Pest preview">`;
            };
            reader.readAsDataURL(file);
        }

        function analyzePestImage() {
            if (!pestImage.files.length) {
                if (currentLanguage === 'en') {
                    pestResult.innerHTML = '<p style="color: red;">Please select an image first.</p>';
                } else if (currentLanguage === 'hi') {
                    pestResult.innerHTML = '<p style="color: red;">कृपया पहले एक छवि चुनें।</p>';
                } else if (currentLanguage === 'pa') {
                    pestResult.innerHTML = '<p style="color: red;">ਕਿਰਪਾ ਕਰਕੇ ਪਹਿਲਾਂ ਇੱਕ ਚਿੱਤਰ ਚੁਣੋ।</p>';
                }
                return;
            }

            if (currentLanguage === 'en') {
                pestResult.innerHTML = '<div class="loading"></div> Analyzing image...';
            } else if (currentLanguage === 'hi') {
                pestResult.innerHTML = '<div class="loading"></div> छवि का विश्लेषण किया जा रहा है...';
            } else if (currentLanguage === 'pa') {
                pestResult.innerHTML = '<div class="loading"></div> ਚਿੱਤਰ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੈ...';
            }
            
            // Simulate analysis
            setTimeout(() => {
                const responses = [
                    {
                        pest: currentLanguage === 'en' ? "Aphids" : (currentLanguage === 'hi' ? "एफिड्स" : "ਐਫਿਡਜ਼"),
                        confidence: 92,
                        treatment: currentLanguage === 'en' ? "Use Imidacloprid 17.8% SL at 50-60 ml per acre or Acetamiprid 20% SP at 50 gm per acre." : 
                                  (currentLanguage === 'hi' ? "Imidacloprid 17.8% SL 50-60 ml per acre या Acetamiprid 20% SP 50 gm per acre का use करें।" : 
                                  "Imidacloprid 17.8% SL 50-60 ml ਪ੍ਰਤੀ ਏਕੜ ਜਾਂ Acetamiprid 20% SP 50 gm ਪ੍ਰਤੀ ਏਕੜ ਦੀ ਵਰਤੋਂ ਕਰੋ।")
                    },
                    {
                        pest: currentLanguage === 'en' ? "Stem Borer" : (currentLanguage === 'hi' ? "तना छेदक" : "ਤਣਾ ਬੋਰਰ"),
                        confidence: 87,
                        treatment: currentLanguage === 'en' ? "Apply Chlorantraniliprole 18.5% SC at 40 ml per acre or Cartap Hydrochloride 4% GR at 10 kg per acre." : 
                                  (currentLanguage === 'hi' ? "Chlorantraniliprole 18.5% SC 40 ml per acre या Cartap Hydrochloride 4% GR 10 kg per acre apply करें।" : 
                                  "Chlorantraniliprole 18.5% SC 40 ml ਪ੍ਰਤੀ ਏਕੜ ਜਾਂ Cartap Hydrochloride 4% GR 10 kg ਪ੍ਰਤੀ ਏਕੜ ਲਗਾਓ।")
                    },
                    {
                        pest: currentLanguage === 'en' ? "Whitefly" : (currentLanguage === 'hi' ? "व्हाइटफ्लाई" : "ਵ੍ਹਾਈਟਫਲਾਈ"),
                        confidence: 95,
                        treatment: currentLanguage === 'en' ? "Use Thiamethoxam 25% WG at 40 gm per acre or Buprofezin 25% SC at 400 ml per acre." : 
                                  (currentLanguage === 'hi' ? "Thiamethoxam 25% WG 40 gm per acre या Buprofezin 25% SC 400 ml per acre use करें।" : 
                                  "Thiamethoxam 25% WG 40 gm ਪ੍ਰਤੀ ਏਕੜ ਜਾਂ Buprofezin 25% SC 400 ml ਪ੍ਰਤੀ ਏਕੜ ਦੀ ਵਰਤੋਂ ਕਰੋ।")
                    }
                ];
                
                const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                
                if (currentLanguage === 'en') {
                    pestResult.innerHTML = `
                        <p><strong>Identification:</strong> ${randomResponse.pest}</p>
                        <p><strong>Confidence:</strong> ${randomResponse.confidence}%</p>
                        <p><strong>Treatment:</strong> ${randomResponse.treatment}</p>
                    `;
                } else if (currentLanguage === 'hi') {
                    pestResult.innerHTML = `
                        <p><strong>पहचान:</strong> ${randomResponse.pest}</p>
                        <p><strong>विश्वास स्तर:</strong> ${randomResponse.confidence}%</p>
                        <p><strong>उपचार:</strong> ${randomResponse.treatment}</p>
                    `;
                } else if (currentLanguage === 'pa') {
                    pestResult.innerHTML = `
                        <p><strong>ਪਛਾਣ:</strong> ${randomResponse.pest}</p>
                        <p><strong>ਵਿਸ਼ਵਾਸ ਪੱਧਰ:</strong> ${randomResponse.confidence}%</p>
                        <p><strong>ਇਲਾਜ:</strong> ${randomResponse.treatment}</p>
                    `;
                }
            }, 2000);
        }

        // ========== FERTILIZER SCHEDULE ==========
        function updateFertilizerSchedule() {
            const crop = cropSelect.value;
            
            // Simulate different schedules for different crops
            const schedules = {
                wheat: {
                    basal: "60:40:40",
                    first: "40",
                    second: "40"
                },
                rice: {
                    basal: "50:40:40",
                    first: "50",
                    second: "50"
                },
                cotton: {
                    basal: "60:40:40",
                    first: "40",
                    second: "40"
                },
                maize: {
                    basal: "80:40:40",
                    first: "60",
                    second: "60"
                }
            };
            
            document.getElementById("basal-value").textContent = schedules[crop].basal;
            document.getElementById("first-dressing-value").textContent = schedules[crop].first;
            document.getElementById("second-dressing-value").textContent = schedules[crop].second;
        }

        // ========== OFFLINE DETECTION ==========
        function showOfflineIndicator() {
            offlineIndicator.style.display = "block";
        }

        function hideOfflineIndicator() {
            offlineIndicator.style.display = "none";
        }

        // ========== EVENT LISTENERS ==========
        document.addEventListener('DOMContentLoaded', initApp);

        // Language change
        languageSelect.addEventListener('change', (e) => {
            changeLanguage(e.target.value);
        });

        // About modal
        aboutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            aboutModal.style.display = "flex";
        });

        closeBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                aboutModal.style.display = "none";
            });
        });

        window.addEventListener('click', (e) => {
            if (e.target === aboutModal) aboutModal.style.display = "none";
        });

        // Chat
        sendBtn.addEventListener('click', sendMessage);
        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });

        // Voice recognition
        voiceBtn.addEventListener('click', startVoiceRecognition);

        // Pest identification
        pestImage.addEventListener('change', handlePestImageUpload);
        analyzeBtn.addEventListener('click', analyzePestImage);

        // Fertilizer schedule
        showScheduleBtn.addEventListener('click', updateFertilizerSchedule);

        // Network status
        window.addEventListener('online', hideOfflineIndicator);
        window.addEventListener('offline', showOfflineIndicator);

        // AR view
        arViewBtn.addEventListener('click', () => {
            if (!isLoggedIn) {
                if (currentLanguage === 'en') {
                    alert("Please sign in to access the AR view feature.");
                } else if (currentLanguage === 'hi') {
                    alert("AR view feature तक पहुंचने के लिए कृपया sign in करें।");
                } else if (currentLanguage === 'pa') {
                    alert("AR ਦ੍ਰਿਸ਼ ਵਿਸ਼ੇਸ਼ਤਾ ਤੱਕ ਪਹੁੰਚਣ ਲਈ ਕਿਰਪਾ ਕਰਕੇ ਸਾਈਨ ਇਨ ਕਰੋ।");
                }
                signinModal.style.display = "flex";
                return;
            }
            
            if (currentLanguage === 'en') {
                alert("AR view would open here (simulated).");
            } else if (currentLanguage === 'hi') {
                alert("AR view यहां खुलेगा (simulated)।");
            } else if (currentLanguage === 'pa') {
                alert("AR ਦ੍ਰਿਸ਼ ਇੱਥੇ ਖੁਲੇਗਾ (ਸਿਮਿਊਲੇਡ)।");
            }
        });