{pkgs}: {
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs_20
  ];
  idx.extensions = [
    
  
 "bradlc.vscode-tailwindcss"
 "dbaeumer.vscode-eslint"
 "esbenp.prettier-vscode"
 "formulahendry.auto-rename-tag"
 "mikestead.dotenv"
 "xabikos.JavaScriptSnippets"];
  idx.previews = {
    previews = {
      web = {
        command = [
          "npm"
          "run"
          "dev"
          "--"
          "--port"
          "$PORT"
          "--hostname"
          "0.0.0.0"
        ];
        manager = "web";
      };
    };
  };
}