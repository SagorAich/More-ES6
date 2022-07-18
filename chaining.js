const [p, q, r] = [45, 37, 91, 86];
//console.log(r);

const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'xss',
            third: 'js'
        },
    },
};
console.log(company?.name?.tech?.first);