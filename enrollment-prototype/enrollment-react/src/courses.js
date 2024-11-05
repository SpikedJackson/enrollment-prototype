const courses  = [
    {
        name: 'Automata and Computability',
        code: 'COMPSCI 2AC3',
        description: 'Finite state machines, regular languages, regular expressions, applications of regular languages, grammars, context-free languages, models of computation, computability and decidability. Three lectures, one tutorial (two hours); second term',
        prerequisites: 'COMPSCI 2LC3, 2C03',
        antirequisites: 'COMPSCI 2FA3, 2MJ3, SFWRENG 2FA3',
        units: '3.0',
        filter: 'required'
    },
    {
        name: 'Data Structures and Algorithms',
        code: 'COMPSCI 2C03',
        description: 'Basic data structures: stacks, queues, hash tables, and binary trees; searching and sorting; graph representations and algorithms, including minimum spanning trees, traversals, shortest paths; introduction to algorithmic design strategies; correctness and performance analysis. Three lectures, one tutorial (one hour); first term',
        prerequisites: 'One of the following: COMPSCI 1DM3 or 2DM3, COMPSCI 1XC3 or 1XD3 or 1MD3 or MATH 1MP3, and registration in an Honours Computer Science program or in one of Mathematics and Computer Science, Economics and Computer Science, Arts & Sciences and Computer Science; COMPSCI 1DM3 with a result of at least B, and one of COMPSCI 1XC3 or 1XD3 or 1MD3 or MATH 1MP3 with a result of at least B',
        antirequisites: 'SFWRENG 2C03, COMPENG 3SM4',
        units: '3.0',
        filter: 'required'
    },
    {
        name: 'Databases',
        code: 'COMPSCI 2DB3',
        description: 'Data modelling, integrity constraints, principles and design of relational databases, relational algebra, SQL, query processing, transactions, concurrency control, recovery, security and data storage. Three lectures, one tutorial (one hour); second term',
        prerequisites: 'COMPSCI 2LC3 or COMPSCI 2DM3',
        antirequisites: ' COMPSCI 3DB3, 4DB3, SFWRENG 3DB3 , 3H03, 4M03, 4DB3',
        units: '3.0',
        filter: 'required'
    },
    {
        name: 'Computer Architecture',
        code: 'COMPSCI 2GA3',
        description: 'Introduction to logic gates, computer arithmetic, instruction-set architecture, assembly programming, translation of high-level languages into assembly. Computer system organization: datapath and control, pipelining, memory hierarchies, I/O systems; measures of performance. Three lectures, one tutorial, (one hour); first term',
        prerequisites: 'One of the following: COMPSCI 1XC3 and 1DM3 and registration in an Honours Computer Science program or in one of Mathematics and Computer Science, Economics and Computer Science, Arts & Sciences and Computer Science; COMPSCI 1XC3 and 1DM3, each with a result of at least B',
        antirequisites: 'COMPENG 3DR4, 4DM4, SFWRENG 2GA3, 3GA3',
        units: '3.0',
        filter: 'required'
    },
    {
        name: 'Logical Reasoning for Computer Science',
        code: 'COMPSCI 2LC3',
        description: 'Introduction to logic and proof techniques for practical reasoning: propositional logic, predicate logic, structural induction; rigorous proofs in discrete mathematics and programming. Three lectures, one tutorial (two hours); first term',
        prerequisites: 'One of the following: COMPSCI 1DM3, 1JC3 one of COMPSCI 1MD3, 1XC3, 1XD3, and registration in an Honours Computer Science program or in one of Mathematics and Computer Science, Economics and Computer Science, Arts & Sciences and Computer Science; COMPSCI 1DM3, 1JC3, and one of COMPSCI 1MD3, 1XC3, 1XD3, each with a result of at least B',
        antirequisites: 'COMPSCI 2DM3, SFWRENG 2DM3',
        units: '3.0',
        filter: 'required'
    },
    {
        name: 'Introduction to Software Development',
        code: 'COMPSCI 2ME3',
        description: 'Classes and inheritance, class invariants, interface specifications; object-oriented design patterns; exception handling; tools for interface documentation, testing, program analysis; requirements documentation; quality attributes; development models. Three lectures one tutorial (two hours); first term',
        prerequisites: 'One of the following: COMPSCI 1XC3 or 1XD3, and registration in an Honours Computer Science program or in one of Mathematics and Computer Science, Economics and Computer Science, Arts & Sciences and Computer Science; COMPSCI 1DM3 and one of 1XC3 and 1XD3, each with a result of at least B',
        antirequisites: 'SFWRENG 2AA4, SFWRENG 3K04, MECHTRON 3K04',
        units: '3.0',
        filter: 'required'
    },
    {
        name: 'The Big Questions',
        code: 'ASTRON 2B03',
        description: 'Ultimate questions in modern science are surveyed with emphasis on physical sciences: origin of space-time, elements and structure in the cosmos (stars, planets, galaxies). Three lectures, one tutorial; one term',
        prerequisites: 'Registration in Level II or above',
        antirequisites: 'None',
        units: '3.0',
        filter: 'electives'
    },
    
];

export default courses;
