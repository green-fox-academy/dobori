massInKg = 81.2
heightInM = 1.78

#Print the Body mass index (BMI) based on these values

bmi = 0
bmi = massInKg / heightInM**2
print(bmi)
result =''
if bmi < 18.5:
    result = 'You are underweight'
elif 18.5 <= bmi < 25:
    result = 'Normal' 
elif 25 <= bmi < 30:
    result = 'Overweight'
else:
    result = 'Obese'

print(result)