import React from 'react';

import { faRocket, faPalette, faNotesMedical, faGuitar, faPlane, faScaleBalanced, faFaceGrinWink, faLandmarkDome, faFeather } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const subjectList = [
  {
    id: 1,
    name: 'Фантастика',
    url: 'search?q=subject:fiction',
    param: 'fiction',
    icon: <FontAwesomeIcon icon={faRocket} />,
  },
  {
    id: 2,
    name: 'Арт',
    url: 'search?q=subject:art',
    param: 'art',
    icon: <FontAwesomeIcon icon={faPalette} />,
  },
  {
    id: 3,
    name: 'Медицина',
    url: 'search?q=subject:medical',
    param: 'medical',
    icon: <FontAwesomeIcon icon={faNotesMedical} />,
  },
  {
    id: 4,
    name: 'Музыка',
    url: 'search?q=subject:music',
    param: 'music',
    icon: <FontAwesomeIcon icon={faGuitar} />,
  },
  {
    id: 5,
    name: 'Путешествие',
    url: 'search?q=subject:travel',
    param: 'travel',
    icon: <FontAwesomeIcon icon={faPlane} />,
  },
  {
    id: 6,
    name: 'Право',
    url: 'search?q=subject:law',
    param: 'law',
    icon: <FontAwesomeIcon icon={faScaleBalanced} />
  },
  {
    id: 7,
    name: 'Юмор',
    url: 'search?q=subject:humor',
    param: 'humor',
    icon: <FontAwesomeIcon icon={faFaceGrinWink} />,

  },
  {
    id: 8,
    name: 'История',
    url: 'search?q=subject:history',
    param: 'history',
    icon: <FontAwesomeIcon icon={faLandmarkDome} />,
  },
  {
    id: 9,
    name: 'Поэзия',
    url: 'search?q=subject:poetry',
    param: 'poetry',
    icon: <FontAwesomeIcon icon={faFeather} />,
  },
];
export default subjectList;
