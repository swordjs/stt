import yaml


CONFIG_FILE_NAME = 'stt.config.yaml'


def split_content(data, fragment_size):
    """Split content into fragments"""
    # data is a string that needs to be split into fragments of length fragment_size
    fragments = []
    for i in range(0, len(data), fragment_size):
        fragment = data[i:i+fragment_size]
        fragments.append(fragment)
        
    return fragments


def parse_stt_config_yaml():
    with open(CONFIG_FILE_NAME, 'r') as yaml_file:
        config_data = yaml.safe_load(yaml_file)
        
    return config_data