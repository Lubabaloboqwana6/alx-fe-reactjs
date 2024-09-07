import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // for additional matchers
import TodoList from "./TodoList";

test("renders TodoList component and displays initial todos", () => {
  // Render the TodoList component
  render(<TodoList />);

  // Check if the component title is rendered
  expect(screen.getByText(/Todo List/i)).toBeInTheDocument();

  // Check if each initial todo is rendered
  expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  expect(screen.getByText(/Write Tests/i)).toBeInTheDocument();
  expect(screen.getByText(/Build Todo List App/i)).toBeInTheDocument();
});

test("adds a new todo when form is submitted", () => {
  // Render the TodoList component
  render(<TodoList />);

  // Get input field and button elements
  const inputField = screen.getByPlaceholderText(/Add a new todo/i);
  const addButton = screen.getByText(/Add/i);

  // Simulate user typing a new todo
  fireEvent.change(inputField, { target: { value: "New Todo" } });

  // Simulate form submission
  fireEvent.click(addButton);

  // Check if the new todo is added to the list
  expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
});

test("toggles todo completion status when clicked", () => {
  // Render the TodoList component
  render(<TodoList />);

  // Get the first todo item
  const todoItem = screen.getByText(/Learn React/i);

  // Initially, the todo should not be completed
  expect(todoItem).not.toHaveStyle("text-decoration: line-through");

  // Simulate clicking the todo item to toggle its completion status
  fireEvent.click(todoItem);

  // After clicking, the todo should be marked as completed
  expect(todoItem).toHaveStyle("text-decoration: line-through");

  // Simulate clicking the todo item again to toggle back
  fireEvent.click(todoItem);

  // After clicking again, the todo should be not completed
  expect(todoItem).not.toHaveStyle("text-decoration: line-through");
});

test("deletes a todo item when delete button is clicked", () => {
  // Render the TodoList component
  render(<TodoList />);

  // Get the delete button for the first todo item
  const deleteButton = screen.getAllByText(/Delete/i)[0]; // Assuming "Delete" buttons are there for each todo

  // Get the text of the first todo item
  const todoItem = screen.getByText(/Learn React/i);

  // Initially, the todo item should be in the document
  expect(todoItem).toBeInTheDocument();

  // Simulate clicking the delete button
  fireEvent.click(deleteButton);

  // After clicking, the todo item should be removed from the document
  expect(todoItem).not.toBeInTheDocument();
});
