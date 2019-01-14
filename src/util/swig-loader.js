'use strict';

var loaderUtils = require('loader-utils'),
    parseQuery = require('loader-utils/lib/parseQuery'),
    Swig = new require('swig').Swig,
    defaultOpts = {},
    noop = function () {},
    noopr = function (r) { return r; },
    queryCustomizer = noop,
    resourceQueryCustomizer = noop,
    resultCustomizer = noopr;

module.exports = function (content) {
    var plugin = this;
    // console.log(content);
    plugin.cacheable && plugin.cacheable();
    var query = loaderUtils.getOptions(this);
    plugin.resourceQuery = parseQuery(this.resourceQuery || '?') || {};
    content = resolve(content, plugin, query);
    return prepareResult(content, query);
};

module.exports.options = function (opts) {
    if (!opts) return;
    if (typeof opts !== 'object') return;
    if (Array.isArray(opts)) return;
    defaultOpts = opts;
};

module.exports.queryCustomizer = function (customizer) {
    queryCustomizer = customizer || noop;
};

module.exports.resourceQueryCustomizer = function (customizer) {
    resourceQueryCustomizer = customizer || noop;
};

module.exports.resultCustomizer = function (customizer) {
    resultCustomizer = customizer || noopr;
};

function prepareResult (content, opts) {
    // console.log(content);
    if (opts && opts.raw) return content;
    if (typeof content === 'string' && content.indexOf('module.exports') === 0) return content;
    return 'module.exports = ' + JSON.stringify(content) + ';';
}

function resolve (content, plugin, query) {
    var templateOpts, swig, result;
    try {
        resourceQueryCustomizer(plugin.resourceQuery, plugin.resourcePath);
        queryCustomizer(query, plugin.resourcePath);
        templateOpts = assign({}, defaultOpts, query);
        swig = new Swig(templateOpts);
        registerTemplateDependencies(swig, plugin);
        result = swig.render(content, {
            locals: query, // plugin.resourceQuery,
            filename: plugin.resourcePath
        });
        result = resultCustomizer(result, plugin.resourcePath, templateOpts, plugin.resourceQuery);
    } catch (e) {
        plugin.emitError('Could not resolve swig template. Cause: ' + e);
        return '';
    }
    return result;
}

function registerTemplateDependencies (swig, plugin) {
    var loader = swig.options.loader,
        _load = loader.load;
    loader.load = function (filepath) {
        plugin.addDependency(filepath);
        return _load.apply(loader, arguments);
    };
}

function assign (result) {
    var args = Array.prototype.slice.call(arguments, 1);
    args.forEach(function (a) {
        Object.keys(a || {}).forEach(function (key) {
            result[key] = a[key];
        });
    });
    return result;
}
