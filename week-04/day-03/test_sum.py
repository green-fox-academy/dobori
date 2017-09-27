import unittest
from sum import Summa


class TestSumma(unittest.TestCase):
    def test_empty(self):
        my_list = Summa()
        self.assertTrue(my_list)
    
    def test_add_element(self):
        my_list = Summa()
        self.assertEqual(my_list.get_sum([1, 3]), 4)

    def test_null(self):
        my_list = Summa()
        self.assertEqual(my_list.get_sum([0]), 0)
    
    def test_one_element(self):
        my_list = Summa()
        self.assertEqual(my_list.get_sum([5]), 5)


if __name__ == '__main__':
    unittest.main()