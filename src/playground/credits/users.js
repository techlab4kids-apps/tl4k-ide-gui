const shuffle = list => {
    for (let i = list.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        const tmp = list[i];
        list[i] = list[random];
        list[random] = tmp;
    }
    return list;
};

const fromHardcoded = ({userId, username, name}) => ({
    image: `https://trampoline.turbowarp.org/avatars/${userId}`,
    href: `https://scratch.mit.edu/users/${username}/`,
    text: name || username
});
const fromOther = ({userId, username, name}) => ({
    image: `${userId}`,
    href: `${username}`,
    text: name || username
});

const fromHardcodedGithub = username => ({
    image: `https://github.com/${username}.png`,
    href: `https://github.com/${username}/`,
    text: username
});
const fromHardcodedCodeberg = username => ({
    image: `https://codeberg.org/${username}.png`,
    href: `https://codeberg.org/${username}/`,
    text: username
});

const fromHardcodedDiscord = async userId => {
    const res = await fetch(`https://pmupdatereader.jeremygamer13.repl.co/user/${userId}`);
    const json = await res.json();
    return {
        image: json.avatarURL,
        text: json.username
    };
};

const addonDevelopers = [
    {
        userId: '34018398',
        username: 'Jeffalo'
    },
    {
        userId: '64184234',
        username: 'ErrorGamer2000'
    },
    {
        userId: '41616512',
        username: 'pufferfish101007'
    },
    {
        userId: '61409215',
        username: 'TheColaber'
    },
    {
        userId: '1882674',
        username: 'griffpatch'
    },
    {
        userId: '10817178',
        username: 'apple502j'
    },
    {
        userId: '16947341',
        username: '--Explosion--'
    },
    {
        userId: '14880401',
        username: 'Sheep_maker'
    },
    {
        userId: '9981676',
        username: 'NitroCipher'
    },
    {
        userId: '2561680',
        username: 'lisa_wolfgang'
    },
    {
        userId: '60000111',
        username: 'GDUcrash'
    },
    {
        userId: '4648559',
        username: 'World_Languages'
    },
    {
        userId: '17340565',
        username: 'GarboMuffin'
    },
    {
        userId: '5354974',
        username: 'Chrome_Cat'
    },
    {
        // actual ID is 34455896 but their avatar is the wrong resolution and looks really weird
        userId: '0',
        username: 'summerscar'
    },
    {
        userId: '55742784',
        username: 'RedGuy7'
    },
    {
        userId: '9636514',
        username: 'Tacodude7729'
    },
    {
        userId: '14792872',
        username: '_nix'
    },
    {
        userId: '30323614',
        username: 'BarelySmooth'
    },
    {
        userId: '64691048',
        username: 'CST1229'
    }
    // TODO: retronbv is banned?
].map(fromHardcoded);

const pmDevelopers = [
    'enderhacker',
    'FreshPenguin112',
    'Ianyourgod',
    'JoshAtticus',
    'JeremyGamer13',
    'jwklong',
    'tnix100',
    'RedMan13',
    'showierdata9978'
].map(fromHardcodedGithub);

const snDev = [
    'dumorando',
    'nmsderp',
    'cesderp14',
    'someCatInTheWorld',
    'Plungebot',
].map(fromHardcodedGithub);
const snContributeCodeBerg = [
    'ACat'

].map(fromHardcodedCodeberg)

const rubyDev = [
    "Gen1x-ALT",
    "cicerorph",
    "DodecaTheDev",
    "ddededodediamante",
    "CharcoalAfterlife",
    "JoshAtticus",
    "adevguylol"
].map(fromHardcodedGithub)

const logoArtists = Promise.all([
    '593554048188416001'
].map(fromHardcodedDiscord));

const extensionDevelopers = [
    'GarboMuffin',
    'Ruby-Devs',
    'griffpatch',
    'DT-is-not-available',
    'SharkPool-SP',
    'GingerNinjaStickdudeWorld',
    'Vadik1',
    'MikeDev101',
    'LilyMakesThings',
    'CharcoalAfterlife',
    'pooiod'
].map(fromHardcodedGithub);

export default {
    addonDevelopers: shuffle(addonDevelopers),
    pmDevelopers: shuffle(pmDevelopers),
    snDev: shuffle(snDev),
    rubyDev: shuffle(rubyDev),
    logoArtists: shuffle(logoArtists),
    extensionDevelopers: shuffle(extensionDevelopers),
    snContributeCodeBerg: shuffle(snContributeCodeBerg),
    fromOther: shuffle(fromOther)
};
