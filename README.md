# Python - Commit Linting with Unit Testing

Basic example repository to set-up `pre-commit` with `commitlint` and `unittest`. _Optional: Python formatter (`autopep8`) and linting (`pylint`)._

## Set-up guide

```bash
# install node modules
npm install

# create venv
python -m venv venv

#activate venv
source venv/Scripts/activate

# install python modules
pip install -r requirements.txt

# install pre-commit hooks
pre-commit install

# install commitlint hook
pre-commit install --hook-type commit-msg
```

After you staged your changes and commit, unit tests will run, then `commitlint`. If either fail, then the commit will not go through until the errors have been resolved.

## Optional

Add/edit `.pylintrc` for Python linting.
