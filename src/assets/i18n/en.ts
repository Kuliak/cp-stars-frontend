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
      star_details: {
        coordinates: {
          alpha: 'Alpha',
          dec: 'Declination',
          delta: 'Delta',
          error: 'error',
          galactic_longitude: 'Galactic Longitude',
          galactic_latitude: 'Galactic Latitude',
          ra: 'Right Ascension',
          value: 'value',
        },
        id_2009_A_AND_A_498_961_R: 'Renson',
        identifiers: {
          external: 'External',
          title: 'Identifiers',
        },
        magnitudes: {
          band: 'band',
          datasources: {
            _2mass: '2MASS',
            apass: 'APASS',
            delta_a_photometry: '2005A&A...441..631P',
            dr2: 'DR2',
            dr3: 'DR3',
            geneva: 'Geneva',
            hipparcos: 'Hipparcos',
            johnson: 'Johnson UBV',
            stroemgren: 'Stroemgren',
          },
          error: 'error',
          quality: 'quality',
          title: 'Magnitudes',
          value: 'value',
        },
        motions: {
          datasource: 'Datasource',
          parallax: 'parallax',
          parallax_error: 'parallax error',
          pmdec: 'pmDec',
          pmdec_error: 'pmDec error',
          pmra: 'pmRA',
          pmra_error: 'pmRA error',
          title: 'Motions',
        },
        radial_velocities: {
          datasource: 'Datasource',
          radial_velocity: 'Radial velocity',
          radial_velocity_error: 'Radial velocity error',
          title: 'Radial velocities',
        },
      },
    },
  };
};

export default en;