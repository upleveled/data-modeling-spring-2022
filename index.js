// A team list with name,
// job position,
// role (editor, admin, no rights),
// and pets (with name and type)

// const teamRoles = ['admin', 'editor', 'no rights'];

const teamRoles = {
  admin: 'administrator',
  editor: 'editor',
  noRights: 'no rights',
};

const teamMembers = [
  {
    id: 1,
    name: 'Kimberley',
    jobPosition: 'CEO',
    role: teamRoles.admin, // teamRoles[0]
    pets: [
      {
        name: 'Wuff',
        type: 'dog',
      },
    ],
  },
  {
    id: 2,
    name: 'Victor',
    jobPosition: 'Developer',
    role: teamRoles.editor,
    pets: [],
  },
  {
    id: 3,
    name: 'Jose',
    jobPosition: 'Developer',
    role: teamRoles.editor,
    pets: [],
  },
];

console.log(typeof teamMembers); // object
console.log(Array.isArray(teamMembers)); // true
console.log(typeof teamMembers[0].name); // string
console.log(typeof teamMembers[0].pets); // object

if (typeof teamMembers[1].name !== 'string') {
  throw new Error('name is not a string');
}

// map filter

// <div>name</div>
// <div>teamRoles</div>

// function TeamMembersList() {
//   return teamMembers.map((teamMember) => {
//     return (
//       <div key={`teamMember-${teamMember.id}`}>
//         <div>Name: {teamMember.name}</div>
//         <div>Job Position: {teamMember.jobPosition}</div>
//       </div>
//     );
//   });
// }

// filter

console.log(
  teamMembers.filter((teamMember) => {
    //   if (teamMember.id !== 2) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }),
    return teamMember.name !== 'Kimberley';
  }),
);

const teamMemberIndex = teamMembers.findIndex((teamMember) => {
  return teamMember.id === 1;
});

if (
  teamMembers.findIndex((teamMember) => {
    return teamMember.id === 1;
  }) !== -1
) {
  teamMembers[teamMemberIndex].firstName = 'Lukas';
}

console.log(teamMembers);
