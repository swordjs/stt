def split_content(data, fragment_size):
    """Split content into fragments"""
    # data is a string that needs to be split into fragments of length fragment_size
    fragments = []
    for i in range(0, len(data), fragment_size):
        fragment = data[i:i+fragment_size]
        fragments.append(fragment)
        
    return fragments
