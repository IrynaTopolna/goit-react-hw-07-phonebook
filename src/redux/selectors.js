import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts;
export const selectItems = state => state.contacts.items;
export const selectFilter = state => state.filter;

export const selectFiltredNames = createSelector(
  [selectItems, selectFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  }
);
