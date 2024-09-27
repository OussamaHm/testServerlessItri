import json
from googletrans import Translator

translator = Translator()

en_file = 'public/locales/en/common.json'
fr_file = 'public/locales/fr/common.json'
de_file = 'public/locales/de/common.json'

def translate_json(input_file, output_file, target_lang):
    with open(input_file, 'r', encoding='utf-8') as file:
        data = json.load(file)

    translated_data = {}

    for key, value in data.items():
        if isinstance(value, dict):
            translated_data[key] = translate_json(value, value, target_lang)
        else:
            translated_data[key] = translator.translate(value, dest=target_lang).text

    with open(output_file, 'w', encoding='utf-8') as file:
        json.dump(translated_data, file, ensure_ascii=False, indent=2)

translate_json(en_file, fr_file, 'fr')

translate_json(en_file, de_file, 'de')
