# Chemically Peculiar stars database GUI client


Chemically peculiar (CP) stars are the subject of astronomical research
in recent decades in particular. Their nature makes them classifiable
on different levels of certainty, creating inconsistent sets of stars.

CP-Stars application offers simple access to the list of [Ap, HgMn and Am stars](https://ui.adsabs.harvard.edu/abs/2009A%26A...498..961R/abstract).

## Backend part: [CP-Stars](https://github.com/Kuliak/cp-stars)

## Usage

In order to run the CP-Stars graphical user interface, either this repository has to be cloned:

```
git clone https://github.com/Kuliak/cp-stars-frontend.git
```

or by downloading [**the latest release version**](https://github.com/Kuliak/cp-stars-frontend/releases).


After obtaining (downloading) the required CP-Stars GUI application, dependencies have to be installed.

For Unix-based system
```
cd <GUI_folder>
npm install
```

When all dependencies were installed successfully, application can be launched using following
command in the project root folder:

```
npm start
```



## Other commands

```
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
