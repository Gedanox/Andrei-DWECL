import deepl
import sys



n = len(sys.argv)

# Addition of numbers
End = " "
# Using argparse module
for i in range(1, n):
    End += sys.argv[i]


translator = deepl.Translator("e4db42fe-e4b5-1f1f-25da-4a4702c20424:fx")
result = translator.translate_text(End, target_lang="ES")
translated_text = result.text

print(translated_text)