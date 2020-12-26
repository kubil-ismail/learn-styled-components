const size = {
    mobile: '320px',
    tablet: '768px',
    laptop: '1024px',
}

const device = {
    mobile: `(min-width: ${size.mobile}) and (max-width: ${size.tablet})`,
    tablet: `(min-width: ${size.tablet}) and (max-width: ${size.laptop})`,
    laptop: `(min-width: ${size.laptop})`,
};

export default device;