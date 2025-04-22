let contacts = [
  {
    id: 1,
    name: "Mas Amba",
    tag: "ambaofficial",
    imageUrl: "/images/amba.png",
  },
  {
    id: 2,
    name: "Mas Rusdi",
    tag: "rusdiofficial",
    imageUrl: "/images/rusdi.png",
  },
];

function getContacts() {
  return contacts;
}

function addContact(contact) {
  contacts = [
    ...contacts,
    { id: +new Date(), imageUrl: "/images/default.jpg", ...contact },
  ];
}

function deleteContact(id) {
  contacts = contacts.filter((contact) => contact.id !== id);
}

export { getContacts, addContact, deleteContact };
