from faker import Faker
import json


def main():
    fake = Faker()

    data = []
    for i in range(1000000):
        print(i)
        data.append(
            {
                "id": i + 1,
                "firstName": fake.first_name(),
                "lastName": fake.last_name(),
                "dateOfBirth": fake.date(),
                "country": fake.country(),
                "city": fake.city(),
                "street": fake.street_address(),
            }
        )

    with open("../data/data.json", "w") as f:
        f.write(json.dumps(data))


if __name__ == "__main__":
    main()
