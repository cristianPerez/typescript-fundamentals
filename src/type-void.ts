// Void

// Explisit

function showInfo(user: any): void {
  console.log('User Info', user.id, user.userName, user.firstName)
}

showInfo({
  id: 1,
  userName: 'cperez354',
  firstName: 'Cristian'
});

// Infered

function showFormatedInfo(user: any) {
  console.log('User Info', `
    id: ${user.id}
    userName: ${user.userName}
    firstName: ${user.firstName}
  `);
}

showFormatedInfo({
  id: 2,
  userName: 'cperez354',
  firstName: 'Cristian'
});

// Type void

let unusable: void;
// unusable = null; // Error in the strict mode.
unusable = undefined;