set dotenv-load

backend:
    cd os-demo && go run main.go

frontend:
    cd frontend && npm start
