from src import utils

def test_split_content():
    content = "this is a test"
    fragment_size = 4
    fragments = utils.split_content(content, fragment_size)
    assert fragments == ["this", " is ", "a te", "st"]
