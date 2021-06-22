# FIRESTORE RULES ORGANIZER

Helps you organize your firestore rules and split it to different files

## Installation

```
npm i firestore-rules-organizer
```


## Getting Started

Create a folder called firestore-rules at the root of your project.

```
mkdir firestore-rules
```

Add .rules file that contains your firestore rules (Ex. user.rules, post.rules, etc)


Example: Create user.rules and place it inside your firestore-rules folder

Add your firestore rules for your user collection.

```
    match /users/{user} {
      allow read, write: if false;
    }

```

Then run

```
build-firestore-rules
```

Your firestore.rules file will be created or updated base on the rules you added in you firestore-rules folder

Example output:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    match /users/{user} {
      allow read, write: if false;
    }

  }
}
```