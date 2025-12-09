<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV - TAPSOBA Simon Wendzodo</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 20px;
        }
        
        .container {
            max-width: 900px;
            margin: 0 auto;
            background: white;
            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
            border-radius: 10px;
            overflow: hidden;
        }
        
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px;
            text-align: center;
        }
        
        .header h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
            text-transform: uppercase;
            letter-spacing: 2px;
        }
        
        .header .title {
            font-size: 1.3em;
            opacity: 0.95;
            margin-bottom: 20px;
        }
        
        .contact-info {
            display: flex;
            justify-content: center;
            gap: 30px;
            flex-wrap: wrap;
            margin-top: 20px;
        }
        
        .contact-item {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .content {
            padding: 40px;
        }
        
        .section {
            margin-bottom: 35px;
        }
        
        .section-title {
            color: #667eea;
            font-size: 1.8em;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 3px solid #667eea;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .competence-category {
            margin-bottom: 25px;
        }
        
        .competence-category h3 {
            color: #764ba2;
            font-size: 1.3em;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .competence-list {
            list-style: none;
            padding-left: 20px;
        }
        
        .competence-list li {
            padding: 8px 0;
            position: relative;
            padding-left: 25px;
        }
        
        .competence-list li:before {
            content: "▸";
            position: absolute;
            left: 0;
            color: #667eea;
            font-weight: bold;
        }
        
        .languages {
            display: flex;
            gap: 30px;
            flex-wrap: wrap;
        }
        
        .language-item {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 15px 25px;
            border-radius: 25px;
            font-weight: bold;
        }
        
        .projects {
            display: grid;
            gap: 15px;
        }
        
        .project-link {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid #667eea;
            transition: all 0.3s ease;
            text-decoration: none;
            color: #333;
            display: block;
        }
        
        .project-link:hover {
            transform: translateX(10px);
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
        }
        
        .project-link a {
            color: #667eea;
            word-break: break-all;
            text-decoration: none;
            font-weight: 500;
        }
        
        .note {
            background: #fff3cd;
            border-left: 4px solid #ffc107;
            padding: 20px;
            border-radius: 5px;
            margin-top: 20px;
            font-style: italic;
            line-height: 1.8;
        }
        
        .additional-info {
            background: #e7f3ff;
            border-left: 4px solid #2196F3;
            padding: 20px;
            border-radius: 5px;
            line-height: 1.8;
        }
        
        @media print {
            body {
                background: white;
                padding: 0;
            }
            
            .container {
                box-shadow: none;
                border-radius: 0;
            }
            
            .project-link:hover {
                transform: none;
            }
        }
        
        @media (max-width: 600px) {
            .header h1 {
                font-size: 1.8em;
            }
            
            .contact-info {
                flex-direction: column;
                gap: 15px;
            }
            
            .content {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>TAPSOBA Simon Wendzodo</h1>
            <div class="title">Développeur Web & Applications</div>
            <div class="contact-info">
                <div class="contact-item">
                    <span>📱</span>
                    <a href="https://wa.me/22664850402" target="_blank" style="color: white; text-decoration: none;">+226 64 85 04 02</a>
                </div>
                <div class="contact-item">
                    <span>✉️</span>
                    <a href="mailto:simontapsoba264@gmail.com" style="color: white; text-decoration: none;">simontapsoba264@gmail.com</a>
                </div>
            </div>
        </div>
        
        <div class="content">
            <div class="section">
                <h2 class="section-title">💻 Compétences Techniques</h2>
                
                <div class="competence-category">
                    <h3>🎨 Front-end</h3>
                    <ul class="competence-list">
                        <li>Maîtrise du framework <strong>Flutter</strong></li>
                        <li>Maîtrise de <strong>React</strong></li>
                        <li>Connaissance de <strong>Figma</strong></li>
                        <li>Utilisation de l'<strong>Intelligence Artificielle</strong></li>
                    </ul>
                </div>
                
                <div class="competence-category">
                    <h3>⚙️ Back-end</h3>
                    <ul class="competence-list">
                        <li>Maîtrise du framework <strong>Laravel</strong> (création d'API)</li>
                        <li>Maîtrise de la base de données NoSQL <strong>Firebase</strong></li>
                        <li>Maîtrise de la base de données <strong>MySQL</strong></li>
                    </ul>
                </div>
                
                <div class="competence-category">
                    <h3>🚀 Hébergement & Déploiement</h3>
                    <ul class="competence-list">
                        <li>Déploiement sur <strong>Firebase</strong></li>
                        <li>Déploiement sur <strong>Render</strong></li>
                        <li>Utilisation de <strong>GitHub</strong> pour le travail collaboratif et la gestion de code</li>
                        <li>Gestion de noms de domaine <strong>.bf</strong> en collaboration avec l'ABDI (formation en Gouvernance de l'Internet)</li>
                    </ul>
                </div>
            </div>
            
            <div class="section">
                <h2 class="section-title">🌍 Langues</h2>
                <div class="languages">
                    <div class="language-item">🇫🇷 Français : Bien</div>
                    <div class="language-item">🇬🇧 Anglais : Bien</div>
                    <div class="language-item">🇧🇫 Mooré : Bien</div>
                </div>
            </div>
            
            <div class="section">
                <h2 class="section-title">🎯 Projets Réalisés</h2>
                <div class="projects">
                    <div class="project-link">
                        <strong>Hôpital Paul 6</strong><br>
                        <a href="https://hopitalpaul6.onrender.com" target="_blank">https://hopitalpaul6.onrender.com</a>
                    </div>
                    <div class="project-link">
                        <strong>Mairie Arrondissement 33</strong><br>
                        <a href="https://mairiearrd33.onrender.com" target="_blank">https://mairiearrd33.onrender.com</a>
                    </div>
                    <div class="project-link">
                        <strong>Restaurant Canaan</strong><br>
                        <a href="https://restaurantcanaan-4da80.web.app/" target="_blank">https://restaurantcanaan-4da80.web.app/</a>
                    </div>
                    <div class="project-link">
                        <strong>Beoog Burkimbi</strong><br>
                        <a href="https://beoogburkimbi.web.app" target="_blank">https://beoogburkimbi.web.app</a>
                    </div>
                </div>
                
                <div class="note">
                    <strong>Note :</strong> Dans le monde du numérique, on ne peut pas garantir de tout savoir. Il y a chaque fois de la nouveauté et je ne connais qu'une portion qui fait des étincelles. Donc chaque jour j'apprends pour être à la page. J'espère être utile avec ce que je sais.
                </div>
            </div>
            
            <div class="section">
                <h2 class="section-title">ℹ️ Informations Complémentaires</h2>
                <div class="additional-info">
                    J'accompagne les investisseurs au Burkina Faso à s'installer dans le pays.
                </div>
            </div>
        </div>
    </div>
</body>
</html>