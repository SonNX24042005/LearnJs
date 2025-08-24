import pandas as pd

# URL của file Google Sheets đã được xuất bản dưới dạng CSV
# Thay thế bằng URL của bạn
url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5g5g7i4J5g-Z_DUG2GgQ5g5g7i4J5g-Z_DU/pub?output=csv'

try:
    # Đọc dữ liệu từ URL vào một DataFrame của Pandas
    df = pd.read_csv(url)

    # In ra 5 dòng đầu tiên của dữ liệu
    print(df.head())

except Exception as e:
    print(f"Đã xảy ra lỗi: {e}")