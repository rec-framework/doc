# Best Practices

## Modularization

Rec support both Jar module and CommonJS module, you can 
use both of them to create re-usable modules for more 
powerful data processing programs.

### Jar module

To use Jar module, you can just put the jar archive to related
class path, i.e. the path you specified to the JVM.

e.g. You want to use JDBI to access PostgreSQL database, just
put the related jar lib to `lib/` directory and simply run:

```bash
java -cp 'lib/*' net.kimleo.rec.App <the-script-file>
```

### CommonJS module

Rec's CommonJS module is similiar to NodeJS module, in module
file, you can just use `module.exports` to exports your API, and
later in program script, just directly `require(<the module>)`,
and all stuff in the module file will be loaded.

see `API/require` for details.