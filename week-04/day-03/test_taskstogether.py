import unittest
from tasks_together import fibonacci

class TestFibonacci(unittest.TestCase):
    def test_empty(self):
        self.assertEqual(fibonacci(""), 0)

    def test_one(self):
        self.assertTrue(fibonacci(1))

    def test_zero(self):
        self.assertEqual(fibonacci(0), 0)
    
    def test_element(self):
        self.assertEqual(fibonacci(6), 8)

    # def test_null(self):
    #     my_list = Summa()
    #     self.assertEqual(my_list.get_sum([0]), 0)



if __name__ == '__main__':
    unittest.main()