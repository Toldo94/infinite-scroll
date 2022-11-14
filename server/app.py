import json
from flask import Flask, make_response, jsonify, request
from flask_cors import CORS

f = open("./data/data.json")

DATA = json.load(f)

app = Flask(__name__)
CORS(app)


@app.route("/data")
def hello_world():
    page = int(request.args.get("page", 1))
    limit = int(request.args.get("limit", 20))
    start_index = (page - 1) * limit
    end_index = start_index + limit
    return (
        make_response(
            jsonify(
                {
                    "count": len(DATA),
                    "page": page,
                    "limit": limit,
                    "data": DATA[start_index:end_index],
                }
            )
        ),
        200,
    )


if __name__ == "__main__":
    app.run(
        debug=True,
    )
