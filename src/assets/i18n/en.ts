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
        navigation:
          'Throughout the whole application, the collapsible menu on the left side can be used to either return back to the Home page or get to the About page or Manual page.',
        sections: {
          home_page: {
            title: 'Home page (CP stars list)',
            intro:
              'Graphical User interface starts with the overall table containing all the stars in the database, together with fields and buttons ' +
              'usable for filtering the data displayed in the table. Data can be filtered either by Renson identifier or by setting Right Ascension (RA), ' +
              'Declination (Dec) and radius.',
            table: {
              intro:
                'The home page table consists of several columns, each representing only basic data providing basic information for star differentiation and identification:',
              binary_system: 'Binary system',
              binary_system_description:
                'flag indicating the corresponding star’s presence in a binary system',
              category_probability: 'Category probability',
              category_probability_description:
                'flag indicating with how large prob- ability the corresponding star belongs to considered category (chemically peculiar star)',
              galactic_latitude: 'Gal. lat.',
              galactic_latitude_description: 'galactic latitude coordinate',
              galactic_longitude: 'Gal. long.',
              galactic_longitude_description: 'galactic longitude coordinate',
              icrs_dec_description: 'ICRS Declination coordinate',
              icrs_ra_description: 'ICRS Right Ascension coordinate',
              id_description: 'CP-Stars database internal identifier',
              renson_description: 'Renson catalog identifier',
            },
          },
          star_details: {
            title: 'Star details',
            intro:
              'After a user clicks on the row containing the desired star in the table on Home page, he is redirected to the star details page that is split into two parts graphic-wise:',
            parts: {
              clickable_cards: {
                title: 'Clickable cards',
                intro:
                  'Each card redirects a user to a specific page containing corresponding data. In case wrong card would be selected, BACK button ' +
                  'at the top of the page can be used to return back to the general star details page. Several cards are provided:',
                attributes: 'Attributes',
                attributes_description:
                  'various star attributes, each referencing a data source it comes from, for example, spectral type',
                identifiers: 'Identifiers',
                identifiers_description:
                  'identifiers stored in the database as well as externally obtained ones',
                light_curve: 'Light curve',
                light_curve_description: 'light curve graph (mouse scroll to zoom)',
                magnitudes: 'Magnitudes',
                magnitudes_description: 'spectroscopy magnitudes from several sources',
                motions: 'Motions',
                motions_description:
                  'motion-related values (parallaxes and proper motion measurements)',
                radial_velocities: 'Radial velocities',
                spectrum: 'Spectrum',
                spectrum_description:
                  'spectrum graph (mouse scroll for zooming) with color scale adjusting to currently selected wavelength interval',
                vizier_metadata: 'Vizier metadata',
                vizier_metadata_description: "list of tables containing corresponding star's data",
              },
              general_star_info: {
                title: 'General star information',
                intro:
                  'This part includes data displayed in the table on Home page further enriched by other coordinates (alpha/delta) as well as corresponding ' +
                  'measurements errors for specific coordinates (ICRS). Additionally, external data are fetched using AstroSearcher application (redshift, ' +
                  'effective temperature). If external data were not fetched yet, a scrolling circle is displayed instead of a value.',
              },
            },
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
        cp_stars: 'CP-Stars',
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
