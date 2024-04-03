-- populate the tables - based on ministry information as of April 3, 2024 ('2024-04-03')

-- ministry table
INSERT INTO ministry (ministry_name, m_change_effective_date, is_current) 
        VALUES ('Agriculture and Food', '2024-04-03', true),
        ('Attorney General','2024-04-03', true),
        ('Children and Family Development','2024-04-03', true),
        ('Minister of State for Child Care','2024-04-03', true),
        ('Citizens Services','2024-04-03', true),
        ('Education and Child Care','2024-04-03', true),
        ('Emergency Management and Climate Readiness','2024-04-03', true),
        ('Energy, Mines and Low Carbon Innovation','2024-04-03', true),
        ('Environment and Climate Change Strategy','2024-04-03', true),
        ('Finance','2024-04-03', true),
        ('Forests','2024-04-03', true),
        ('Minister of State for Sustainable Forestry Innovation','2024-04-03', true),
        ('Health','2024-04-03', true),
        ('Housing','2024-04-03', true),
        ('Intergovernmental Relations Secretariat','2024-04-03', true),
        ('Indigenous Relations and Reconciliation','2024-04-03', true),
        ('Jobs, Economic Development and Innovation','2024-04-03', true),
        ('Labour','2024-04-03', true),
        ('Mental Health and Addictions','2024-04-03', true),
        ('Transportation and Infrastructure','2024-04-03', true),
        ('Minister of State for Infrastructure and Transit','2024-04-03', true),
        ('Municipal Affairs','2024-04-03', true),
        ('Office of the Premier','2024-04-03', true),
        ('Post-Secondary Education and Future Skills','2024-04-03', true),
        ('Public Safety and Solicitor General','2024-04-03', true),
        ('Social Development and Poverty Reduction','2024-04-03', true),
        ('Tourism, Arts, Culture and Sport','2024-04-03', true),
        ('Minister of State for Trade','2024-04-03', true),
        ('Water, Land and Resource Stewardship','2024-04-03', true)
        ;

-- inset into acronym table
INSERT INTO acronym (acronym, a_change_effective_date) 
        VALUES ('AF','2024-04-03'),
        ('AG','2024-04-03'),
        ('CFD','2024-04-03'),
        ('CHILD','2024-04-03'),
        ('CITZ','2024-04-03'),
        ('ECC','2024-04-03'),
        ('EMCR','2024-04-03'),
        ('EMLI','2024-04-03'),
        ('ENV','2024-04-03'),
        ('FIN','2024-04-03'),
        ('FOR','2024-04-03'),
        ('SFI','2024-04-03'),
        ('HLTH','2024-04-03'),
        ('HOUS','2024-04-03'),
        ('IGRS','2024-04-03'),
        ('IRR','2024-04-03'),
        ('JEDI','2024-04-03'),
        ('LBR','2024-04-03'),
        ('MMHA','2024-04-03'),
        ('MOTI','2024-04-03'),
        ('INFRA','2024-04-03'),
        ('MUNI','2024-04-03'),
        ('PREM','2024-04-03'),
        ('PSFS','2024-04-03'),
        ('PSSG','2024-04-03'),
        ('SDPR','2024-04-03'),
        ('TACS','2024-04-03'),
        ('TRADE','2024-04-03'),
        ('WLRS','2024-04-03')
;

-- insert into ministry_acronym 
INSERT INTO ministry_acronym (ministry_id, acronym_id)
    values ((select ministry_id 
                from ministry 
                where ministry_name = upper('Agriculture and Food');
             ),
             (select acronym_id 
                from acronym 
                where acronym = upper('AF');
             )
            )
    ;


