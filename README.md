# Infinite scroll

## Backend setup

First you need to generate data. We want 1M of entries and the generated file is too big for Github.

Steps to follow:

1. Create virtual environment UNIX based system - python3-m venv env
2. Activate virtual environment
3. Run `pip install -r requirements.txt`
4. Navigate to `generator` directory and run `python generator.py` - this will take time because it has to generate 1M of entries.
5. Navigate back to `server` directory and run `python app.py` or `sh ./run_server.sh`

## Frontend setup

Steps to run frontend app

1. Navigate to web and run `npm install`
2. Run `npm start` to start development server
