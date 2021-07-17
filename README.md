# FIRESTORE RULES ORGANIZER
<p align="center">
    <a href="https://www.npmjs.com/package/firestore-rules-organizer">
      <img src="https://badgen.net/npm/dm/firestore-rules-organizer" alt="Downloads">
    </a>
    <a href="https://www.npmjs.com/package/firestore-rules-organizer">
      <img src="https://badgen.net/npm/license/firestore-rules-organizer" alt="License">
    </a>
</p>

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

## Configuration

| Option  | Default Value  | Description |
| :------------ | :--------------- | :----- |
| rules_folder      | firestore-rules | This is the directory where you can place all your firestore rules |
| rules_output     | firestore.rules        | The output file of the consolidated rules from your rules folder |

## (Optional) Create a configuration file to override the default values

Create a file called firestore_rules_organizer.config.js at the root of your project.
Place your desired rules_folder and rules_output values.

```
module.exports = {
    rules_folder: "firestore-rules",
    rules_output: "firestore.rules",
};
```

