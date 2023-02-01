const en = () => {
  return {
    translation: {
      about: {
        project: {
          name: 'Project',
          description: {
            created_on: 'Chemically Peculiar Stars Database project was created in May 2023.',
            created_for:
              "Project was a part of master's thesis developed primarily for Department of Theoretical\n" +
              'Physics and Astrophysics, Masaryk University as well as general astrophysics academical\n' +
              'society.',
            contributors: 'Contributors:',
          },
        },
        acknowledgements: {
          name: 'Acknowledgements',
          graphics: 'Project graphical design was developed with support of:',
          server: {
            resources_description: 'Server side of application is using:',
            astrosearcher: {
              purpose_description: 'obtaining general information about stars',
            },
          },
        },
      },
      drawer: {
        home: 'Home',
        about: 'About',
        manual: 'Manual',
      },
      footer: {
        client_version: 'Client Version',
      },
      general: {
        university: {
          name: 'Masaryk University',
        },
      },
      home: {
        input_form: {
          select_options: {
            id: 'Id',
            coordinates: 'Coordinates',
          },
          id: 'Id',
          coordinates: {
            name: 'Coordinates',
            ra: 'ra',
            dec: 'dec',
            radius: 'radius',
          },
        },
      },
      project: {
        title: 'CP-Stars',
      },
    },
  };
};

export default en;
