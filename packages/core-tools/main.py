#!/usr/bin/env python3
import os
import click
from openai2 import Chat

@click.command()
@click.option("--k", prompt="Your openai key", help="Openai key", envvar="OPENAI_KEY")
@click.option("--m", prompt="Your model", help="Openai model", default="gpt-3.5-turbo", envvar="OPENAI_MODEL")
@click.option("--t", prompt="Your temperature", help="Openai temperature", default=0.2, envvar="OPENAI_TEMPERATURE")
@click.option("--f", prompt="Fragment size (in string length)", help="Fragment size", default=2048, envvar="OPENAI_FRAGMENT_SIZE")
def main(key, model, temperature, fragment_size):
    """ stt command line core tools """
    chat_main = Chat(api_key=key, model=model, temperature=temperature)
    with open("src/prompt/default.txt", "r") as f:
        prompt = f.read()
    prompt = prompt.replace("{{targetLanguage}}", "German")
    chat_main.request(prompt)
    r = chat_main.request('''
this is test
''')
    print(r)

if __name__ == '__main__':
    main()