import queryString from 'query-string';

export const getQueryParam = (searchStr, name) => {
    const values = parseQueryStr(searchStr);
    return values[name];
}

export const parseQueryStr = (searchStr) => {
    return queryString.parse(searchStr);
}