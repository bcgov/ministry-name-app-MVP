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
        ('Water, Land and Resource Stewardship','2024-04-03', true),
        -- test data:
       	        ('Test Ministry of Supernatural Phenomena and Occult Studies', '1999-04-03', false),
                ('Test Ministry of Timeless Tales and Folklore Preservation', '1999-04-03', false),
                ('Test Ministry of Mystical Medicine and Alchemical Remedies', '1990-08-08', false),
                ('Test Ministry of Astral Projections and Dream Exploration', '2001-07-22', false),
                ('Test Ministry of Quantum Computing and Virtual Reality', '1990-08-08', false),
                ('Test Ministry of Time Travel and Temporal Affairs', '2005-04-03', false),
                ('Test Ministry of Wizards and Amazing Magic', '2018-12-03', false),
                ('Test Ministry of Extraordinary Events and Phenomena', '2005-04-03', false),
                ('Test Ministry of Enigmatic Enigmas and Conundrums', '1990-08-08', false),
                ('Test Ministry of Arcane Arts and Mystical Studies', '2018-11-17', false)
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
        ('WLRS','2024-04-03'),
        -- test data:
                ('spos','1999-04-03'),
                ('TTFP','1999-04-03'),
                ('mMAR','1990-08-08'),
                ('APD','2001-07-22'),
                ('QPVR','1990-08-08'),
                ('TTTa','2005-04-03'),
                ('WAM','2018-12-03'),
                ('eep','2005-04-03'),
                ('eec','1990-08-08'),
                ('aAMS','2018-11-17')
;

-- insert into ministry_acronym
INSERT INTO ministry_acronym (ministry_id, acronym_id)
VALUES 
(
    (SELECT ministry_id FROM ministry WHERE UPPER(ministry_name) = UPPER('Agriculture and Food')),
    (SELECT acronym_id FROM acronym WHERE UPPER(acronym) = UPPER('AF'))
),
(
    (SELECT ministry_id FROM ministry WHERE UPPER(ministry_name) = UPPER('Attorney General')),
    (SELECT acronym_id FROM acronym WHERE UPPER(acronym) = UPPER('AG'))
),
(
    (SELECT ministry_id FROM ministry WHERE UPPER(ministry_name) = UPPER('Children and Family Development')),
    (SELECT acronym_id FROM acronym WHERE UPPER(acronym) = UPPER('CFD'))
),
(
    (SELECT ministry_id FROM ministry WHERE UPPER(ministry_name) = UPPER('Minister of State for Child Care')),
    (SELECT acronym_id FROM acronym WHERE UPPER(acronym) = UPPER('CHILD'))
),
(
    (SELECT ministry_id FROM ministry WHERE UPPER(ministry_name) = UPPER('Citizens Services')),
    (SELECT acronym_id FROM acronym WHERE UPPER(acronym) = UPPER('CITZ'))
),
(
    (SELECT ministry_id FROM ministry WHERE UPPER(ministry_name) = UPPER('Education and Child Care')),
    (SELECT acronym_id FROM acronym WHERE UPPER(acronym) = UPPER('ECC'))
),
(
    (SELECT ministry_id FROM ministry WHERE UPPER(ministry_name) = UPPER('Emergency Management and Climate Readiness')),
    (SELECT acronym_id FROM acronym WHERE UPPER(acronym) = UPPER('EMCR'))
),
(
    (SELECT ministry_id FROM ministry WHERE UPPER(ministry_name) = UPPER('Energy, Mines and Low Carbon Innovation')),
    (SELECT acronym_id FROM acronym WHERE UPPER(acronym) = UPPER('EMLI'))
),
(
    (SELECT ministry_id FROM ministry WHERE UPPER(ministry_name) = UPPER('Environment and Climate Change Strategy')),
    (SELECT acronym_id FROM acronym WHERE UPPER(acronym) = UPPER('ENV'))
),
(
    (SELECT ministry_id FROM ministry WHERE UPPER(ministry_name) = UPPER('Finance')),
    (SELECT acronym_id FROM acronym WHERE UPPER(acronym) = UPPER('FIN'))
),
(
    (SELECT ministry_id FROM ministry WHERE UPPER(ministry_name) = UPPER('Forests')),
    (SELECT acronym_id FROM acronym WHERE UPPER(acronym) = UPPER('FOR'))
),
(
    (SELECT ministry_id FROM ministry WHERE UPPER(ministry_name) = UPPER('Minister of State for Sustainable Forestry Innovation')),
    (SELECT acronym_id FROM acronym WHERE UPPER(acronym) = UPPER('SFI'))
),
(
    (SELECT ministry_id FROM ministry WHERE UPPER(ministry_name) = UPPER('Health')),
    (SELECT acronym_id FROM acronym WHERE UPPER(acronym) = UPPER('HLTH'))
),
(
    (SELECT ministry_id FROM ministry WHERE UPPER(ministry_name) = UPPER('Housing')),
    (SELECT acronym_id FROM acronym WHERE UPPER(acronym) = UPPER('HOUS'))
),
(
    (SELECT ministry_id FROM ministry WHERE UPPER(ministry_name) = UPPER('Intergovernmental Relations Secretariat')),
    (SELECT acronym_id FROM acronym WHERE UPPER(acronym) = UPPER('IGRS'))
),
(
    (SELECT ministry_id FROM ministry WHERE UPPER(ministry_name) = UPPER('Indigenous Relations and Reconciliation')),
    (SELECT acronym_id FROM acronym WHERE UPPER(acronym) = UPPER('IRR'))
),
(
    (SELECT ministry_id FROM ministry WHERE UPPER(ministry_name) = UPPER('Jobs, Economic Development and Innovation')),
    (SELECT acronym_id FROM acronym WHERE UPPER(acronym) = UPPER('JEDI'))
),
(
    (SELECT ministry_id FROM ministry WHERE UPPER(ministry_name) = UPPER('Labour')),
    (SELECT acronym_id FROM acronym WHERE UPPER(acronym) = UPPER('LBR'))
),
(
    (SELECT ministry_id FROM ministry WHERE UPPER(ministry_name) = UPPER('Mental Health and Addictions')),
    (SELECT acronym_id FROM acronym WHERE UPPER(acronym) = UPPER('MMHA'))
),
(
    (SELECT ministry_id FROM ministry WHERE UPPER(ministry_name) = UPPER('Transportation and Infrastructure')),
    (SELECT acronym_id FROM acronym WHERE UPPER(acronym) = UPPER('MOTI'))
),
(
    (SELECT ministry_id FROM ministry WHERE UPPER(ministry_name) = UPPER('Minister of State for Infrastructure and Transit')),
    (SELECT acronym_id FROM acronym WHERE UPPER(acronym) = UPPER('INFRA'))
),
(
    (SELECT ministry_id FROM ministry WHERE UPPER(ministry_name) = UPPER('Municipal Affairs')),
    (SELECT acronym_id FROM acronym WHERE UPPER(acronym) = UPPER('MUNI'))
),
(
    (SELECT ministry_id FROM ministry WHERE UPPER(ministry_name) = UPPER('Office of the Premier')),
    (SELECT acronym_id FROM acronym WHERE UPPER(acronym) = UPPER('PREM'))
),
(
    (SELECT ministry_id FROM ministry WHERE UPPER(ministry_name) = UPPER('Post-Secondary Education and Future Skills')),
    (SELECT acronym_id FROM acronym WHERE UPPER(acronym) = UPPER('PSFS'))
),
(
    (SELECT ministry_id FROM ministry WHERE UPPER(ministry_name) = UPPER('Public Safety and Solicitor General')),
    (SELECT acronym_id FROM acronym WHERE UPPER(acronym) = UPPER('PSSG'))
),
(
    (SELECT ministry_id FROM ministry WHERE UPPER(ministry_name) = UPPER('Social Development and Poverty Reduction')),
    (SELECT acronym_id FROM acronym WHERE UPPER(acronym) = UPPER('SDPR'))
),
(
    (SELECT ministry_id FROM ministry WHERE UPPER(ministry_name) = UPPER('Tourism, Arts, Culture and Sport')),
    (SELECT acronym_id FROM acronym WHERE UPPER(acronym) = UPPER('TACS'))
),
(
    (SELECT ministry_id FROM ministry WHERE UPPER(ministry_name) = UPPER('Minister of State for Trade')),
    (SELECT acronym_id FROM acronym WHERE UPPER(acronym) = UPPER('TRADE'))
),
(
    (SELECT ministry_id FROM ministry WHERE UPPER(ministry_name) = UPPER('Water, Land and Resource Stewardship')),
    (SELECT acronym_id FROM acronym WHERE UPPER(acronym) = UPPER('WLRS'))
 ),
 -- test data:
(   
    (SELECT ministry_id FROM ministry WHERE UPPER(ministry_name) = UPPER('Test Ministry of Supernatural Phenomena and Occult Studies')),
    (SELECT acronym_id FROM acronym WHERE UPPER(acronym) = UPPER('spos'))
 ),
(   
    (SELECT ministry_id FROM ministry WHERE UPPER(ministry_name) = UPPER('Test Ministry of Timeless Tales and Folklore Preservation')),
    (SELECT acronym_id FROM acronym WHERE UPPER(acronym) = UPPER('TTFP'))
),
(
    (SELECT ministry_id FROM ministry WHERE UPPER(ministry_name) = UPPER('Test Ministry of Mystical Medicine and Alchemical Remedies')),
    (SELECT acronym_id FROM acronym WHERE UPPER(acronym) = UPPER('MMAR'))
),
(
    (SELECT ministry_id FROM ministry WHERE UPPER(ministry_name) = UPPER('Test Ministry of Astral Projections and Dream Exploration')),
    (SELECT acronym_id FROM acronym WHERE UPPER(acronym) = UPPER('APD'))
),
(
    (SELECT ministry_id FROM ministry WHERE UPPER(ministry_name) = UPPER('Test Ministry of Quantum Computing and Virtual Reality')),
    (SELECT acronym_id FROM acronym WHERE UPPER(acronym) = UPPER('QPVR'))
),
(
    (SELECT ministry_id FROM ministry WHERE UPPER(ministry_name) = UPPER('Test Ministry of Time Travel and Temporal Affairs')),
    (SELECT acronym_id FROM acronym WHERE UPPER(acronym) = UPPER('TTTA'))
),
(
    (SELECT ministry_id FROM ministry WHERE UPPER(ministry_name) = UPPER('Test Ministry of Wizards and Amazing Magic')),
    (SELECT acronym_id FROM acronym WHERE UPPER(acronym) = UPPER('WAM'))
),
(
    (SELECT ministry_id FROM ministry WHERE UPPER(ministry_name) = UPPER('Test Ministry of Extraordinary Events and Phenomena')),
    (SELECT acronym_id FROM acronym WHERE UPPER(acronym) = UPPER('EEP'))
),
(
    (SELECT ministry_id FROM ministry WHERE UPPER(ministry_name) = UPPER('Test Ministry of Enigmatic Enigmas and Conundrums')),
    (SELECT acronym_id FROM acronym WHERE UPPER(acronym) = UPPER('eec'))
),
(
    (SELECT ministry_id FROM ministry WHERE UPPER(ministry_name) = UPPER('Test Ministry of Arcane Arts and Mystical Studies')),
    (SELECT acronym_id FROM acronym WHERE UPPER(acronym) = UPPER('aAMs'))
);


-- insert into ministry_acronym
--contains test data only
INSERT INTO ministry_history (ministry_id, ministry_id_history)
VALUES 
    (39,30),  
	 (27, 39 ), 
	 (12,35), 
	 (12, 31), 
	 (24, 32), 
	 (37, 33), 
	 (10, 34), 
	 (5, 36), 
	 (36,37), 
	 (35, 38);