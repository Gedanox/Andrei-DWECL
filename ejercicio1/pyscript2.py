import deepl
translator = deepl.Translator("e4db42fe-e4b5-1f1f-25da-4a4702c20424:fx")
result = translator.translate_text("hello how are you doing", target_lang="ES")
translated_text = result.text
print(translated_text)