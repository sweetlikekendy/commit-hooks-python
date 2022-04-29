import unittest
import hello_world


class TestHelloWorld(unittest.TestCase):

    def test_hello_world(self):
        self.assertEqual(hello_world.say_hello_world(), "hello world")
        self.assertNotEqual(hello_world.say_hello_world(), "asdf")


if __name__ == '__main__':
    unittest.main()
