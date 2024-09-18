"use client";

import React from "react";
import { USER_FORM_FIELDS } from "./formFields";

export const UserForm = () => {
  return (
    <form
      className="flex flex-col"
      method="POST"
      action="http://localhost:3333/users"
    >
      {USER_FORM_FIELDS.map(({ name, type, required, placeholder }) => (
        <input
          key={name}
          className="mt-4"
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
        />
      ))}
      <button type="submit">Create user</button>
    </form>
  );
};
