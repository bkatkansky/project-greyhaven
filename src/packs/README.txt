JSON data exported from Foundry VTT which can then be modified and reimported

To export data:

    foundry@us-ca-do-sfo2-01-vps-0:~$ cd /dnd/foundry/vttdata/Data/modules/project-greyhaven/packs

    foundry@us-ca-do-sfo2-01-vps-0:/dnd/foundry/vttdata/Data/modules/project-greyhaven/packs$ bunx fvttdb
    ┌  [ FoundryVTT Database Tools 3.0.2 ]
    │
    ◇  Do you want to extract or compile packs?
    │  Extract
    │
    ◇  Select a database format
    │  LevelDB
    │
    ◇  Select a data source format
    │  JSON
    │
    ◇  Path to the Input directory with packs
    │  ./
    │
    ◇  Select packs to extract (Space: select; A: select all; Enter: confirm)
    │  gh-factions, gh-tables, gh-journals, gh-npcs, gh-blight
    │
    ◇  Path to the Output directory with JSON data
    │  ./src/
    │
    ◇  FVTTDB will extract the packs 'gh-factions,gh-tables,gh-journals,gh-npcs,gh-blight' from ./ to ./src/ Do you want to
    continue?
    │  Yes
    │

    Exported JSON will be in ./src/

To import data:

    foundry@us-ca-do-sfo2-01-vps-0$ cd /dnd/foundry/vttdata/Data/modules/project-greyhaven/packs
    foundry@us-ca-do-sfo2-01-vps-0$ bunx fvttdb
    ┌  [ FoundryVTT Database Tools 3.0.2 ]
    │
    ◇  Do you want to extract or compile packs?
    │  Compile
    │
    ◇  Select a database format
    │  LevelDB
    │
    ◇  Select a data source format
    │  JSON
    │
    ◇  Path to the Input directory with JSON data
    │  ./src/
    │
    ◇  Select packs to compile (Space: select; A: select all; Enter: confirm)
    │  gh-factions
    │
    ◇  Path to the Output directory with compiled packs
    │  ./compiled/
    │
    ◇  FVTTDB will compile the pack 'gh-factions' from ./src/ to ./compiled/ Do you want to continue?
    │  Yes
    │

    JSON definitions will be imported into Foundry VTT.




