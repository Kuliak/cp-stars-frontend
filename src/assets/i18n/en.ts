const en = () => {
  return {
    translation: {
      about: {
        title: 'About',
        project: {
          title: 'Project',
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
          hosting: {
            description: {
              host: 'CP-Stars application is hosted by ',
              on_behalf: ', on behalf of ',
            },
            user_behalf:
              'Department of Theoretical Physics and Astrophysics, Faculty of Science, Masaryk University, Brno, Czech Republic',
          },
          server: {
            resources_description: 'Server side of application is using:',
            astrosearcher: {
              purpose_description: 'obtaining general information about stars',
            },
          },
        },
        datasources: {
          bibcode: 'Bibcode',
          name: 'Name',
          title: 'Datasources',
          year: 'Year',
        },
      },
      datasource_details: {
        bibcode: 'Bibcode',
      },
      dialogs: {
        export: {
          stars: {
            attributes: 'Attributes',
            buttons: {
              cancel: 'Cancel',
              export: 'Export',
            },
            empty_value_representation: 'Empty value representation',
            identifiers: 'Identifiers',
            info: 'stars will be exported. Select which additional information you want to export.',
            magnitudes: 'Magnitudes',
            motions: 'Motions (PM, Parallax)',
            radial_velocities: 'Radial velocities',
            title: 'Export',
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
        buttons: {
          back: 'Back',
        },
        university: {
          name: 'Masaryk University',
        },
      },
      home: {
        export: 'Export',
        input_form: {
          select_options: {
            id: 'Id',
            coordinates: 'Coordinates',
          },
          id: 'Id',
          coordinates: {
            name: 'Coordinates',
            ra: 'RA',
            dec: 'Dec',
            radius: 'Radius',
          },
        },
        reset: 'Reset',
      },
      manual: {
        title: 'Manual',
        description:
          'This page contains user manual for graphical user interface of chemically peculiar (CP) stars database. ' +
          'Manual is divided into several sections (by pages) and describes what information and options it provides. ' +
          'In case more detailed (REST API, ...) or technical information is required, text of the thesis, which this GUI was part of, can be used.',
        sections: {
          home_page: {
            title: 'Home page (CP stars list)',
          },
          star_details: {
            title: 'Star details',
            magnitudes: 'Magnitudes',
            motions: 'Motion-related values (proper motion, parallax)',
            radial_velocities: 'Radial velocities',
            identifiers: 'Identifiers',
          },
        },
      },
      project: {
        title: 'CP Stars',
      },
      star_details: {
        binary_system_component: 'Binary system component',
        category_probability: 'Ap/Am probability',
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
        cpstars: 'CP-Stars',
        effective_temperature: 'Effective Temperature',
        id_2009_A_AND_A_498_961_R: 'Renson',
        identifiers: {
          datasource: 'Datasource',
          external: 'External',
          name: 'Name',
          title: 'Identifiers',
        },
        light_curve: {
          title: 'Light curve',
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
        redshift: 'Redshift',
        spectrum: {
          flux: 'Flux',
          wavelength: 'Wavelength [Angstrom]',
          title: 'Spectrum',
        },
        star_datasource_attributes: {
          attribute_description: 'description',
          attribute_name: 'attribute',
          datasource_name: 'datasource',
          title: 'Attributes',
          value: 'value',
        },
        vizier_metadata: {
          description: 'Description',
          name: 'Name',
          title: 'Vizier metadata',
        },
      },
    },
  };
};

export default en;
