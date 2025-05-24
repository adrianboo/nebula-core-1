document.addEventListener('DOMContentLoaded', function() {
    // ... (código existente para yearSpan, glitchTitle) ...

    const translations = {
        // Header (existente)
        "operatorId": { "pt": "// OPnebula: adrian1", "en": "// OPnebula: adrian1", "zh": "// 操作员: adrian1" },
        "navServices": { "pt": "Serviços_", "en": "Services_", "zh": "服务_" },
        "navContact": { "pt": "Contato_", "en": "Contact_", "zh": "联系_" },
        "navTerms": { "pt": "Termos_", "en": "Terms_", "zh": "条款_" },
        // Intro (existente)
        "specializationText": {
            "pt": "Especialização: Soluções personalizadas para desafios digitais complexos no panorama dos jogos online e interativos. Discrição e eficácia garantidas.",
            "en": "Specialization: Custom solutions for complex digital challenges in the online and interactive gaming landscape. Discretion and efficiency guaranteed.",
            "zh": "专业领域：为在线和互动游戏领域的复杂数字挑战提供定制解决方案。保证斟酌处理和效率。"
        },
        // Services Section - Título Principal (modificado)
        "servicesTitle": { "pt": "// Catálogo Detalhado de Serviços", "en": "// Detailed Service Catalog", "zh": "// 详细服务目录" },

        // Preços Genéricos
        "pricePrefixFrom": { "pt": "A partir de", "en": "From", "zh": "起价" },
        "priceOnConsultation": { "pt": "Sob consulta", "en": "On consultation", "zh": "面议" },
        "priceSuffixPerHour": { "pt": "/hora", "en": "/hour", "zh": "/小时" },

        // Categoria I: Bypass Kernel
        "catKernelBypass": { "pt": "I. Bypass de Sistemas Anti-Cheat (Kernel Level)", "en": "I. Kernel Level Anti-Cheat Bypass Systems", "zh": "I. 内核级反作弊绕过系统" },
        "svcGhostWalkTitle": { "pt": "Serviço \"GhostWalk\"", "en": "\"GhostWalk\" Service", "zh": "\"幽灵行走\"服务" },
        "svcGhostWalkDesc": { "pt": "Desenvolvimento de drivers personalizados e técnicas de hooking avançadas para operar abaixo do radar dos principais anti-cheats.", "en": "Development of custom drivers and advanced hooking techniques to operate below the radar of major anti-cheats.", "zh": "开发定制驱动程序和高级挂钩技术，以便在主流反作弊系统的雷达下运行。" },
        "svcSpectreLinkTitle": { "pt": "Serviço \"SpectreLink\"", "en": "\"SpectreLink\" Service", "zh": "\"幽灵链接\"服务" },
        "svcSpectreLinkDesc": { "pt": "Criação de canais de comunicação criptografados e ofuscados para exfiltração de dados e injeção de comandos sem detecção.", "en": "Creation of encrypted and obfuscated communication channels for data exfiltration and command injection without detection.", "zh": "创建加密和混淆的通信通道，用于数据渗透和命令注入而不被检测。" },
        "svcAegisBreakerTitle": { "pt": "Serviço \"Aegis Breaker\"", "en": "\"Aegis Breaker\" Service", "zh": "\"神盾破坏者\"服务" },
        "svcAegisBreakerDesc": { "pt": "Análise de vulnerabilidades e desenvolvimento de exploits específicos contra módulos de anti-cheat.", "en": "Vulnerability analysis and development of specific exploits against anti-cheat modules.", "zh": "漏洞分析和针对反作弊模块的特定漏洞利用开发。" },

        // Categoria II: Bots e Automação
        "catBotsAutomation": { "pt": "II. Criação de Bots e Automações Avançadas", "en": "II. Advanced Bots & Automations Creation", "zh": "II. 高级机器人和自动化创建" },
        "svcAutomatonCoreTitle": { "pt": "Serviço \"Automaton Core\"", "en": "\"Automaton Core\" Service", "zh": "\"自动核心\"服务" },
        "svcAutomatonCoreDesc": { "pt": "Criação de bots para farming, grinding, leveling e outras tarefas repetitivas.", "en": "Creation of bots for farming, grinding, leveling, and other repetitive tasks.", "zh": "创建用于农场、刷怪、练级和其他重复性任务的机器人。" },
        "svcAutomatonCorePriceSimple": { "pt": "Simples:", "en": "Simple:", "zh": "简单：" },
        "svcAutomatonCorePriceComplex": { "pt": "Complexo:", "en": "Complex:", "zh": "复杂：" },
        "svcPhantomPlayerTitle": { "pt": "Serviço \"Phantom Player\"", "en": "\"Phantom Player\" Service", "zh": "\"幻影玩家\"服务" },
        "svcPhantomPlayerDesc": { "pt": "Bots com capacidade de simular comportamento de jogador em cenários PvP ou cooperativos complexos.", "en": "Bots capable of simulating player behavior in complex PvP or cooperative scenarios.", "zh": "能够在复杂 PvP 或合作场景中模拟玩家行为的机器人。" },
        "svcMarketMasterTitle": { "pt": "Serviço \"Market Master\"", "en": "\"Market Master\" Service", "zh": "\"市场大师\"服务" },
        "svcMarketMasterDesc": { "pt": "Automação para transações em mercados internos de jogos, arbitragem e gerenciamento de inventário.", "en": "Automation for in-game market transactions, arbitrage, and inventory management.", "zh": "游戏内市场交易、套利和库存管理的自动化。" },

        // Categoria III: Engenharia Reversa
        "catReverseEngineering": { "pt": "III. Engenharia Reversa de Jogos", "en": "III. Game Reverse Engineering", "zh": "III. 游戏逆向工程" },
        "svcCodeDecryptorTitle": { "pt": "Serviço \"Code Decryptor\"", "en": "\"Code Decryptor\" Service", "zh": "\"代码解密器\"服务" },
        "svcCodeDecryptorDesc": { "pt": "Análise estática e dinâmica de executáveis e bibliotecas de jogos.", "en": "Static and dynamic analysis of game executables and libraries.", "zh": "游戏可执行文件和库的静态和动态分析。" },
        "svcPacketWhispererTitle": { "pt": "Serviço \"Packet Whisperer\"", "en": "\"Packet Whisperer\" Service", "zh": "\"数据包密语者\"服务" },
        "svcPacketWhispererDesc": { "pt": "Interceptação e análise de tráfego de rede entre cliente e servidor.", "en": "Interception and analysis of network traffic between client and server.", "zh": "客户端和服务器之间网络流量的拦截和分析。" },
        "svcAssetUnpackerTitle": { "pt": "Serviço \"Asset Unpacker\"", "en": "\"Asset Unpacker\" Service", "zh": "\"资源解包器\"服务" },
        "svcAssetUnpackerDesc": { "pt": "Extração e conversão de assets de jogos (modelos 3D, texturas, áudio, scripts).", "en": "Extraction and conversion of game assets (3D models, textures, audio, scripts).", "zh": "游戏资源（3D 模型、纹理、音频、脚本）的提取和转换。" },

        // Categoria IV: Exploiting
        "catExploiting": { "pt": "IV. Exploiting em Jogos", "en": "IV. Game Exploiting", "zh": "IV. 游戏漏洞利用" },
        "svcGlitchHunterTitle": { "pt": "Serviço \"Glitch Hunter\"", "en": "\"Glitch Hunter\" Service", "zh": "\"故障猎人\"服务" },
        "svcGlitchHunterDesc": { "pt": "Pesquisa e desenvolvimento de exploits para falhas de lógica e outras vulnerabilidades.", "en": "Research and development of exploits for logic flaws and other vulnerabilities.", "zh": "研究和开发针对逻辑缺陷和其他漏洞的利用程序。" },
        "svcGlitchHunterPriceMinor": { "pt": "Menores:", "en": "Minor:", "zh": "小型：" },
        "svcGlitchHunterPriceMajor": { "pt": "Maiores:", "en": "Major:", "zh": "大型：" },
        "svcServerCompromiseTitle": { "pt": "Serviço \"Server Compromise (Consultoria Teórica)\"", "en": "\"Server Compromise (Theoretical Consulting)\" Service", "zh": "\"服务器入侵（理论咨询）\"服务" },
        "svcServerCompromiseDesc": { "pt": "Análise de segurança de servidores de jogos, identificação de vetores de ataque potenciais. Primariamente consultivo.", "en": "Security analysis of game servers, identification of potential attack vectors. Primarily advisory.", "zh": "游戏服务器的安全分析，识别潜在的攻击媒介。主要是咨询性质。" },
        "svcMemoryWeaverTitle": { "pt": "Serviço \"Memory Weaver\"", "en": "\"Memory Weaver\" Service", "zh": "\"内存编织者\"服务" },
        "svcMemoryWeaverDesc": { "pt": "Desenvolvimento de cheats baseados em manipulação de memória com técnicas avançadas para evitar detecção.", "en": "Development of memory manipulation-based cheats with advanced techniques to avoid detection.", "zh": "使用高级技术开发基于内存操作的作弊程序以避免检测。" },

        // Nota de rodapé da seção de serviços (modificada)
        "serviceNoteFullCatalog": {
            "pt": "Catálogo completo de funcionalidades e termos detalhados sob consulta inicial.",
            "en": "Full feature catalog and detailed terms available upon initial consultation.",
            "zh": "完整功能目录和详细条款可在初步咨询后提供。"
        },

        // Contact Section (existente)
        "contactTitle": { "pt": "// Pontos de Contato Seguros", "en": "// Secure Contact Points", "zh": "// 安全联络点" },
        "contactOnionNetwork": { "pt": "Rede ONION:", "en": "ONION Network:", "zh": "洋葱网络：" },
        "contactOnionDesc": { "pt": "(Acessível exclusivamente via rede TOR)", "en": "(Exclusively accessible via TOR network)", "zh": "（仅通过TOR网络访问）" },
        "contactDeadDrop": { "pt": "Dead Drop Coordenadas:", "en": "Dead Drop Coordinates:", "zh": "秘密交接点坐标：" },
        "contactDeadDropDesc": { "pt": "(Fornecidas apenas após verificação inicial e acordo mútuo)", "en": "(Provided only after initial verification and mutual agreement)", "zh": "（仅在初步验证和双方同意后提供）" },
        // Terms Section (existente)
        "termsTitle": { "pt": "// Protocolos & Termos", "en": "// Protocols & Terms", "zh": "// 协议与条款" },
        "termsPaymentMethods": { 
            "pt": "<strong>Formas de Pagamento:</strong> Criptomoedas (XMR preferencial, BTC, ETH, LTC, ZEC), Pix (Brasil, via intermediário seguro). Outros métodos sob consulta.",
            "en": "<strong>Payment Methods:</strong> Cryptocurrencies (XMR preferred, BTC, ETH, LTC, ZEC), Pix (Brazil, via secure intermediary). Other methods upon consultation.",
            "zh": "<strong>付款方式：</strong>加密货币（首选 XMR、BTC、ETH、LTC、ZEC）、Pix（巴西，通过安全中介）。其他方式可协商。"
        },
        "termsConditions": {
            "pt": "<strong>Condições:</strong> 50% adiantado, 50% na entrega. Consultoria horária com pagamento programado.",
            "en": "<strong>Conditions:</strong> 50% upfront, 50% on delivery. Hourly consulting with scheduled payment.",
            "zh": "<strong>条件：</strong>预付50%，交付时付50%。按小时咨询，定期付款。"
        },
        "termsConfidentiality": {
            "pt": "<strong>Confidencialidade:</strong> Sigilo mútuo absoluto. Dados do projeto e cliente são tratados com segurança máxima e eliminados pós-conclusão.",
            "en": "<strong>Confidentiality:</strong> Absolute mutual secrecy. Project and client data are handled with maximum security and eliminated post-completion.",
            "zh": "<strong>保密性：</strong>绝对相互保密。项目和客户数据将得到最高级别的安全处理，并在完成后删除。"
        },
        "termsLegality": {
            "pt": "<strong>Legalidade Ficcional:</strong> Todos os serviços são fornecidos para uso no contexto narrativo e criativo. O operador não se responsabiliza pelo uso final das soluções.",
            "en": "<strong>Fictional Legality:</strong> All services are provided for use within the client's narrative and creative context. The operator is not responsible for the final use of the delivered solutions.",
            "zh": "<strong>虚构合法性：</strong>所有服务均在客户的叙事和创作背景下使用。运营者对交付解决方案的最终用途概不负责。"
        },
        // Footer (existente)
        "footerBrand": { "pt": "Nebula Core Systems", "en": "Nebula Core Systems", "zh": "星云核心系统" },
        "footerTransmission": { "pt": "Transmissão Segura", "en": "Secure Transmission", "zh": "安全传输" },
        "footerEOL": { "pt": "Fim de Linha_", "en": "End of Line_", "zh": "线路终端_" }
    };

    // ... (resto da lógica de setLanguage, event listeners, etc., permanece como antes)
    // A função setLanguage já percorre todos os data-translate-key, então ela
    // automaticamente pegará as novas chaves se o HTML estiver correto.

    const langButtons = document.querySelectorAll('.lang-switcher button');
    const htmlElement = document.documentElement;
    const typedTextElement = document.getElementById('specialization');
    let currentTypingTimeout; 

    function setLanguage(lang) {
        htmlElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : lang); 
        
        document.querySelectorAll('[data-translate-key]').forEach(element => {
            const key = element.getAttribute('data-translate-key');
            if (translations[key] && translations[key][lang]) {
                if (element.id === 'specialization') {
                    clearTimeout(currentTypingTimeout);
                    element.style.animation = 'none'; 
                    element.offsetHeight; 
                    element.style.width = '0'; 
                    element.style.opacity = '0'; 
                    
                    element.textContent = translations[key][lang]; 

                    const animationDuration = Math.max(2000, translations[key][lang].length * 50); 
                    const steps = translations[key][lang].length;

                    element.style.animation = `typing ${animationDuration/1000}s steps(${steps}, end) forwards, blink-caret .75s step-end infinite`;
                    element.style.opacity = '1';

                    currentTypingTimeout = setTimeout(() => {
                        if (element.style.animationName && element.style.animationName.includes('typing')) { 
                             element.style.borderRight = 'none'; 
                        }
                    }, animationDuration);

                } else if (element.tagName === 'P' && element.classList.contains('price')) {
                    // Para os preços, precisamos reconstruir a string com partes traduzíveis e partes fixas
                    // Exemplo para: <p class="price"><span data-translate-key="pricePrefixFrom">A partir de</span> $3.800 USD / R$21.470 BRL</p>
                    // O span interno já será traduzido. O texto restante do <p> não tem data-translate-key e permanece.
                    // Se a estrutura do preço fosse mais complexa e totalmente traduzível:
                    // element.innerHTML = translations[key][lang]; // Se 'key' fosse para o parágrafo de preço inteiro.
                    // Por agora, os spans internos nos preços cuidam das partes traduzíveis como "A partir de".
                    // Os valores numéricos e moedas são mantidos como estão no HTML.
                }
                 else if (["termsPaymentMethods", "termsConditions", "termsConfidentiality", "termsLegality"].includes(key)) {
                    element.innerHTML = translations[key][lang];
                }
                else {
                    element.textContent = translations[key][lang];
                }
            }
        });

        langButtons.forEach(button => {
            button.classList.toggle('active', button.getAttribute('data-lang') === lang);
        });
        localStorage.setItem('preferredLanguage', lang);
    }

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedLang = button.getAttribute('data-lang');
            setLanguage(selectedLang);
        });
    });

    const preferredLang = localStorage.getItem('preferredLanguage') || 'pt';
    setLanguage(preferredLang);

    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize year in footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    // Initialize glitch effect data-text
    const glitchElement = document.querySelector('.glitch');
    if (glitchElement && !glitchElement.getAttribute('data-text')) {
        glitchElement.setAttribute('data-text', glitchElement.textContent);
    }

});
