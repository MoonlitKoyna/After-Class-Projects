import datetime

today = datetime.date.today()
print("Today's Date:", today)

total_days = int(input("Enter total number of working days: "))
absent_days = int(input("Enter total number of days you were absent: "))

attended_days = total_days - absent_days
attendance_percentage = (attended_days / total_days) * 100

print(f"\nTotal Working Days: {total_days}")
print(f"Days Attended: {attended_days}")
print(f"Attendance Percentage: {attendance_percentage:.2f}%")

if attendance_percentage < 75:
    print("\nSorry! You are *not eligible* to sit in the exam.")
    print("Reason: Attendance below 75%")
else:
    print("\n Congratulations! You are *eligible* to sit in the exam.")
    print("Keep up your consistency!!")
