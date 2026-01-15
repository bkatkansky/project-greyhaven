# Greyhaven Module (Foundry VTT v13)

GRAYHAVEN (Foundry v13) - JSON PACKS

This ZIP contains JSON-formatted packs (*.dbj) with the content generated in this chat:
- NPC actors (minimal stats + flags)
- Journals: Session 1 kit, spellcasting law & enforcement, clock board, consequences, Gloomwaste horror, lich influence tracker, NPC dossiers
- Factions & clocks journals (with embedded clock data in flags.grayhaven.clocks)
- Blight index journal

IMPORT OPTIONS
A) Use as reference JSON: open files under /packs and copy-paste into your own compendiums using your preferred JSON importer.
B) If you use a JSON compendium importer module, point it at the *.dbj files.

NOTE
Foundry's native compendiums typically use LevelDB (*.db). These packs are JSON for portability.


TOOLS REQUIRED:

bunx:

    See https://bun.com/docs 
    To install: "curl -fsSL https://bun.sh/install | bash" as foundry user.

Foundry VTT CLI (fvtt):

    See https://github.com/foundryvtt/foundryvtt-cli
    To install: "sudo npm install -g @foundryvtt/foundryvtt-cli" 

    Create ~/.fvttrc
        /usr/bin/fvtt configure set installPath <path to Foundry VTT>
        /usr/bin/fvtt configure set dataPath <path to Foundry Data>

    Add to ~/.bashrc
        . ~/.fvttrc
 

