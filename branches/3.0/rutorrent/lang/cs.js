﻿/*
 * WebUI - The WEB interface for uTorrent - http://www.utorrent.cz
 * NO COPYCATS of language update
 * 
 * == BEGIN LICENSE ==
 * 
 * Licensed under the terms of any of the following licenses at your
 * choice:
 * 
 *  - GNU General Public License Version 2 or later (the "GPL")
 *    http://www.gnu.org/licenses/gpl.html
 * 
 *  - GNU Lesser General Public License Version 2.1 or later (the "LGPL")
 *    http://www.gnu.org/licenses/lgpl.html
 * 
 *  - Mozilla Public License Version 1.1 or later (the "MPL")
 *    http://www.mozilla.org/MPL/MPL-1.1.html
 * 
 * == END LICENSE == 
 * 
 * File Name: cs.js
 * 	Czech language file.
 * 
 * File Author:
 * 	emc (emc@utorrent.cz)
 */
 
 var theUILang =
 {
 //all used
 kbs			: "kB/s",
 
 
 //Settings window
 
 General		: "Hlavní",
 Downloads		: "Stahování",
 Connection		: "Připojení",
 BitTorrent		: "BitTorrent",
 Queueing		: "Fronta",
 Scheduler		: "Plánovač",
 Advanced		: "Rozšířené",
 Disk_Cache		: "Cache",
 Enable_Web_Interface	: "Zapnout Webové rozhraní",
 Authent		: "Ověření uživatele",
 Username		: "Jméno",
 Password		: "Heslo",
 Enable_Guest_acc	: "Povolit Guest účet s uživatelským jménem",
 Connectivity		: "Připojení",
 Alt_list_port		: "Alternativní naslouchací port (výchozí port viz. Připojení)",
 Rest_access		: "Omezit přístup na následující IP adresy (IP oddělujte čárkou ,)",
 User_Interface		: "Rozhraní",
 Confirm_del_torr	: "Potvrzovat mazání torrentů",
 Update_GUI_every	: "Obnovování GUI po",
 ms			: "ms",
 Alt_list_bckgnd	: "Šedé pozadí pro sudé řádky",
 Show_speed		: "Rychlost",
 Don_t			: "Nezobrazovat",
 In_status_bar		: "Ve stavové liště",
 In_title_bar		: "V záhlaví okna",
 Show_cat_start		: "Zobrazovat kategorie po spuštění",
 Virt_row_thres		: "Virtual Row Threshold",
 Show_det_start		: "Zobrazit detaily po spuštění",
 Restor_def		: "Obnovit výchozí",
 When_add_torrent	: "Při přidávání torrentů",
 Dnt_start_down_auto	: "Nespouštět stahování automaticky",
 Other_sett		: "Ostatní",
 Append_ut_incompl	: "Přidat .!ut k nekompletním souborům",
 Prealloc_all_files	: "Vymezovat místo souborům",
 Prev_stnd_w_act_con	: "Zamezit standby, jsou-li aktivní torrenty",
 Listening_Port		: "Port pro naslouchání",
 Port_f_incom_conns	: "Port používaný pro příchozí spojení",
 Random_Port		: "Náhodný port",
 Rnd_port_torr_start	: "Po spuštění rTorrent nastavit náhodný port",
 En_UPnP_mapp		: "Zapnout UPnP mapování portu",
 Add_torr_mustdie_f	: "Povolit rTorrent ve Windows Firewall (Windows XP SP2 a novější)",
 Proxy_Server		: "Proxy Server",
 Type			: "Typ",
 none			: "(není)",
 Proxy			: "Proxy",
 Port			: "Port",
 Use_proxy_4_p2p_con	: "Používat proxy server pro peer-to-peer spojení",
 Bandwidth_Limiting	: "Rychlostní limity",
 Global_max_upl		: "Celkový maximální upload",
 unlimited		: "neomezeno",
 Alt_down_r_downl	: "Limit uploadu, když není stahování",
 Glob_max_downl		: "Celkový maximální download",
 Num_of_conn		: "Počet spojení",
 Glob_max_conn		: "Maximální počet všech spojení",
 Max_conn_peer_torr	: "Maximální počet připojených peerů na torrent",
 Num_upl_slots		: "Počet odesílacích slotů na torrent",
 Extra_ulslots		: "Použít další slot, pokud je rychlost uploadu < 90%",
 Add_bittor_featrs	: "Další BitTorrent možnosti",
 En_DHT_ntw		: "Povolit DHT",
 Ask_scrape		: "Žádat tracker o scrape informace",
 En_DHT_new_torrs	: "Zapínat DHT u nových torrentů",
 Peer_exch		: "Peer Exchange",
 Ip_report_track	: "IP/Hostname odesílané trackeru",
 Protocol_enc		: "Kódování přenosu",
 Outgoing		: "Odchozí",
 Disabled		: "Zakázáno",
 Enabled		: "Povoleno",
 Forced			: "Vynuceno",
 All_inc_legacy_conn	: "Povolit nekódovaná příchozí spojení",
 Queue_sett		: "Nastavení čekání ve frontě",
 Max_n_act_torrs	: "Maximální počet aktivních torrentů (seedování nebo stahování)",
 Max_num_act_downl	: "Maximální počet aktivních stahování",
 Seed_while		: "Seeduj dokud [výchozí hodnoty]",
 Ratio_is		: "Ratio je",
 or_time_is		: " % nebo seed čas je ",
 Ignore			: "neomezený",
 nin_min		: "90 minut",
 two_h			: "2 hodiny",
 three_h		: "3 hodiny",
 four_h			: "4 hodiny",
 five_h			: "5 hodin",
 six_h			: "6 hodin",
 seven_h		: "7 hodin",
 eight_h		: "8 hodin",
 nine_h			: "9 hodin",
 ten_h			: "10 hodin",
 twelve_h		: "12 hodin",
 sixteen_h		: "16 hodin",
 twenty_h		: "20 hodin",
 tw_four_h		: "24 hodin",
 thirty_h		: "30 hodin",
 thirty_six_h		: "36 hodin",
 forty_eight_h		: "48 hodin",
 sixty_h		: "60 hodin",
 sev_two_h		: "72 hodin",
 nin_six_h		: "96 hodin",
 Seed_prior		: "Seedování má vyšší prioritu než stahování",
 When_torr_reach	: "Limit uploadu po dosažení hodnoty Ratio nebo seed čas",
 Limit_upl_rate		: "Limit uploadování [0: zastavit]",
 En_shedul		: "Povolit plánování",
 Shed_sett		: "Rychlost v režimu Omezeno",
 Lim_upl_rate		: "Limit rychlosti upload",
 Lim_dow_rate		: "Limit rychlosti download",
 Dis_DHT_when_t_off	: "Vypnout &DHT v režimu Zastaveno",
 Disc_cahe		: "Disková Cache",
 Disc_cahe_bla_bla	: "Disková cash uchovává často používaná data v paměti pro snížení počtu čtení a zápisů na hard disk. µTorrent spravuje cache automaticky, ale vy můžete měnit jeho chování tím, že modifikuje tato nastavení.",
 Overwr_d_cahe_au	: "Nepoužívat automatickou velikost cache. Cache nastavit na",
 MB			: "MB",
 Red_mem_usage		: "Omezit používání paměti, pokud cache není potřeba",
 Adv_cache_sett		: "Rozšířené nastavení cache",
 En_cach_disc		: "Zapnout cache pro zápisy na disk",
 Wr_out_ever_2_min	: "Zapisovat nedotčené bloky každé 2 minuty",
 Wr_immed		: "Zapisovat dokončené části okamžitě",
 En_cah_disc_read	: "Zapnout cache pro čtení z disku",
 Turn_off_w_read	: "Vypnout cache čtení, je-li rychlost uploadu nízká",
 Rem_old_from_cahe	: "Vymazat staré bloky z cache",
 Increase_autom_cach	: "Zvětšit automatickou velikost cache při potížích",
 Advanced		: "Rozšířené",
 Advanced_label		: "Rozšířené nastavení [VAROVÁNÍ: Úpravy na vlastní riziko!]",
 Cancel			: "Zrušit",
 uTorrent_settings	: "rTorrent Nastavení",
 
// Main window
 Doesnt_support		: "ruTorrent nepodporuje Váš webový prohlížeč.",
 Name			: "Název",
 Status			: "Stav",
 Size			: "Velikost",
 Done			: "Dokončeno",
 Downloaded		: "Staženo",
 Uploaded		: "Odesláno",
 Ratio			: "Ratio",
 DL			: "DL",
 UL			: "UL",
 ETA			: "Čas",
 Label			: "Kategorie",
 Peers			: "Peerů",
 Seeds			: "Seedů",
 Avail			: "Dostup.",
 Remaining		: "Zbývající čas",
 Priority		: "Priorita",
 Download		: "Download",
 Upload			: "Upload",
 Not_torrent_file	: "Tento soubor není torrent.",
 Pausing		: "Pozastaveno",
 Seeding		: "Seeduji",
 Downloading		: "Stahování",
 Checking		: "Kontroluji",
 Error			: "Chyba",
 Queued			: "Ve frontě",
 Finished		: "Dokončeno",
 Stopped		: "Zastaveno",
 Request_timed_out	: "Pro požadavek na rTorrent vypršel čas.",
 
 Force_Start		: "Vynucený start",
 Start			: "Start",
 Pause			: "Pauza",
 Stop			: "Stop",
 Force_recheck		: "Zkontrolovat soubory",
 New_label		: "Nová kategorie...",
 Remove_label		: "Odstranit kategorii",
 Labels			: "Kategorie",
 Remove			: "Odstranit",
 Delete_data		: "Smazat data",
 Remove_and		: "Odstranit a ...",
 Details		: "Detaily...",
 Properties		: "Vlastnosti...",
 of			: "z", 
 connected		: "připojených",
 High_priority		: "Vysoká",
 Normal_priority	: "Normalní",
 Low_priority		: "Nízká",
 Dont_download		: "Nestahovat",
 Shure_restore_UI	: "Určitě chcete obnovit uživatelské rozhraní?",
 Reloading		: "Znovunačítám...",
 Name			: "Název",
 Date_			: "Datum",
 Files			: "Soubory",
 Logger			: "Záznamy",
 
 s			: "s",
 bytes			: "bytů",
 KB			: "KB",
 MB			: "MB",
 GB			: "GB",
 TB			: "TB",
 PB			: "PB",
 
 // main WND s
 Loading		: "Načítám...",
 Torrent_file		: "Torrent soubor",
 Torrent_URL		: "Torrent URL",
 Cookies		: "Cookies",
 RSS_Downloader		: "RSS Stahovač",
 Torrent_properties	: "Vlastnosti torrentu",
 Trackers		: "Trackery",
 Max_down_rate		: "Maximální download",
 Max_upl_rate		: "Maximální upload",
 Bandwidth_sett		: "Rychlostní limity",
 Number_ul_slots	: "Počet odesílacích slotů",
 Override_default	: "Ignoruj výchozí nastavení",
 Initial_seed		: "Počáteční seed",
 Enable_DHT		: "Povolit DHT",
 Peer_ex		: "Peer Exchange",
 About			: "O WebUI",
 Enter_label_prom	: "Zadej novou kategorii pro vybrané torrenty",
 Remove_torrents	: "Odtranit torrent(y)",
 Rem_torrents_prompt	: "Opravdu si přejete odstranit vybrané torrenty?",
 All			: "Všechny",
 Active			: "Aktivní",
 Inactive		: "Neaktivní",
 No_label		: "Bez kategorie",
 Transfer		: "Přenos",
 Time_el		: "Uplynulý čas",
 Remaining		: "Zbývá",
 Share_ratio		: "Ratio",
 Down_speed		: "Rychlost Down.",
 Down_limit		: "Limit Download",
 Ul_speed		: "Rychlost Up.",
 Ul_limit		: "Limit Upload",
 Wasted			: "Zahozeno",
 Tracker		: "Tracker",
 Track_URL		: "Tracker URL",
 Track_status		: "Stav trackeru",
 Update_in		: "Aktualizace za",
 DHT_status		: "Stav DHT",
 Save_as		: "Uložit jako",
 Tot_size		: "Celková velikost",
 Created_on		: "Vytvořeno dne",
 Comment		: "Komentář",

  
 //buttons
 add_button		: "Přidat soubor",
 add_url		: "Přidat URL",
 ok			: "   OK   ",
 Cancel			: " Zrušit ",
 no			: "   Ne   ",
 
 mnu_add		: "Přidat torrent",
 mnu_remove		: "Odstranit",
 mnu_start		: "Start",
 mnu_pause		: "Pauza",
 mnu_stop		: "Stop",
 mnu_rss		: "RSS Stahovač",
 mnu_settings		: "Nastavení",
 mnu_search		: "Hledat",
 mnu_lang		: "Jazyk",
 
 //Other variables added by spide
 torrent_add			: "Přidat torrent",
 time_w				: "t ",
 time_d				: "d ",
 time_h				: "h ",
 time_m				: "m ",
 time_s				: "s ",

 //Novik's addition
 Base_directory    		: "Directory",
 Number_Peers_min		: "Minimum number of peers",
 Number_Peers_max		: "Maximum number of peers",
 Tracker_Numwant		: "Wished number of peers",
 Number_Peers_For_Seeds_min	: "Minimum number of seeds",
 Number_Peers_For_Seeds_max	: "Maximum number of seeds",
 Enable_port_open		: "Open listening port",
 dht_port			: "UDP port to use for DHT",
 Ather_Limiting			: "Other limitations",
 Number_dl_slots		: "Number of download slots",
 Glob_max_memory		: "Maximum memory usage",
 Glob_max_files			: "Maximum number of open files",
 Glob_max_http			: "Maximum number of open http connections",
 Glob_max_sockets		: "Maximum number of open sockets",
 Ather_sett			: "Other",
 Directory_For_Dl		: "Default directory for downloads",
 Check_hash			: "Check hash after download",
 Hash				: "Hash",
 IsOpen				: "Open",
 DisableTracker			: "Disable",
 EnableTracker			: "Enable",
 ClientVersion			: "Client",
 Flags				: "Flags",
 ReqTimeout			: "Request timeout",
 GetTrackerMessage		: "Receive messages from tracker",
 Help				: "Help",
 PHPDoesnt_enabled		: "Your Web-server does not support PHP. Correct this and try again.",
 Speed				: "Speed",
 Dont_add_tname			: "Don't add torrent's name to path", 
 Free_Disk_Space		: "Free disk space",
 badXMLRPCVersion		: "rTorrent is compiled with incorrect version of xmlrpc-c library, without i8 support. Version must be >= 1.11. Some functionality will be unavailable.",
 badLinkTorTorrent		: "Bad link to rTorrent. Check if it is really running. Check $scgi_port and $scgi_host settings in config.php and scgi_port in rTorrent configuration file.",
 badUploadsPath			: "Web-server can't access torrents directory for read/write/execute. You can't add torrents through ruTorrent.",
 badSettingsPath		: "Web-server can't access settings directory for read/write/execute. ruTorrent can't save own settings.",
 mnu_help			: "About",
 badUploadsPath2		: "rTorrent's user can't access torrents directory for read/execute. You can't add torrents through ruTorrent.",
 View				: "View",
 AsList				: "as list",
 AsTree				: "as tree",
 Group				: "Group",
 SuperSeed			: "Super-seed",
 badTestPath			: "rTorrent's user can't access file ./test.sh for read/execute. ruTorrent will not work.",
 badSettingsPath2		: "rTorrent's user can't access settings directory for read/write/execute. ruTorrent will not work.",
 scrapeDownloaded		: "Downloaded",
 badSessionPath			: "Web-server can't access rTorrent's session directory for read. ruTorrent will not work.",
 Total				: "Total",
 PCRENotFound			: "PHP module PCRE is not installed. ruTorrent will not work.",
 addTorrentSuccess		: "torrent was successfully passed to rTorrent.",
 addTorrentFailed		: "Error: torrent wasn't passed to rTorrent.",
 pnlState			: "State",
 newLabel			: "New Label",
 enterLabel			: "Enter Label",
 UIEffects			: "Show effects for UI elements",
 Plugins			: "Plugins",
 plgName			: "Name",
 plgStatus			: "Status",
 plgLoaded			: "Loaded",
 plgDisabled			: "Disabled",
 plgVersion			: "Version",
 plgAuthor			: "Author",
 plgDescr			: "Description",
 mnu_go				: "Go",
 pluginCantStart		: "plugin can't start for unknown reason.",
 doFastResume			: "Fast resume",
 innerSearch			: "Local torrents",
 removeTeg			: "Remove tag",
 errMustBeInSomeHost		: "ruTorrent and rTorrent must be installed on the same host. Plugin will not work.",
 warnMustBeInSomeHost		: "ruTorrent and rTorrent must be installed on the same host. Some functionality will be unavailable.",
 plgShutdown			: "Shutdown",
 limit				: "Limit",
 speedList			: "Speed popup list (comma-separated)",
 ClearButton			: "Clear"
 };
