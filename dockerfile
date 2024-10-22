# Use an official Python runtime as a parent image 
FROM python:3.10-slim

# Set environment variables 
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONBUFFERED 1
ENV OPENAI_API_KEY="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"

# Set the working directory in the container 
WORKDIR /app

# Install requirements
RUN pip install --no-cache-dir lida

# Expose the port that the application will listen on 
EXPOSE 8080

# Start the Web UI
CMD ["lida", "ui", "--host", "0.0.0.0", "--port", "8080", "--docs"]