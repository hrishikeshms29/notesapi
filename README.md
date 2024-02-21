# Notes API

API for managing notes.This is an simple api that aims to provide a simple crud api using nodejs,expressjs and postgres sql

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Introduction

This API provides functionality to manage notes. It includes endpoints for retrieving all notes, adding a new note, editing a note, and deleting a note.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sanjay14073/notesapi.git

   ```
2.Now Navigate to folder and run the server
  ```bash
   cd notesapi
  ```

## Usage
  ```bash
   node index.js
  ```

## API Endpoints
# Get All Notes
Endpoint: GET crud/getallNotes

Description: Retrieve all notes.

# Add new Notes 

Endpoint: POST crud/addNote

Description: Add a new note.

Payload:
  ```json
  {
  "note": "Your note content"
  }
  ```

# Update an exisitng note

Endpoint: PATCH crud/editNote/:id

Description: Edit a note by ID.

Payload:

  ```json
  {
  "note": "Updated note content"
  }

  ```
# Delete an Note

Endpoint: DELETE /deleteNote/:id

Description: Delete a note by ID.
