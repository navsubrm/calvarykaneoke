PRAGMA defer_foreign_keys=TRUE;
CREATE TABLE IF NOT EXISTS "pages" (
    "_id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "route" TEXT,
    "page_type" TEXT,
    "page_content" TEXT,
        -- [component_type-component_name]
    "meta_data" TEXT,
    "created_at" INTEGER,
    "updated_at" INTEGER,
    "version" INTEGER
);

-- CREATE TABLE IF NOT EXISTS 'header'(
--     "_id" TEXT NOT NULL PRIMARY KEY,
--     "component_type" TEXT,
--     "component_name" TEXT,
--     "links" TEXT,
--     "created_at" INTEGER,
--     "updated_at" INTEGER,
--     "version" INTEGER
-- );

CREATE TABLE IF NOT EXISTS "components"(
    "_id" TEXT NOT NULL PRIMARY KEY,
    "component_type" TEXT,
    "component_name" TEXT,
    "content" TEXT,
    "created_at" INTEGER,
    "updated_at" INTEGER,
    "version" INTEGER
);

--     "background_image_url" TEXT,
--     "hero_icon_content" TEXT,
--     "hero_title_content" TEXT,
--     "sub_title_left" TEXT,
--     "sub_title_right" TEXT,


-- CREATE TABLE IF NOT EXISTS "current_sermon_link" (
--     "_id" tEXT NOT NULL PRIMARY KEY,
--     "component_type" TEXT,
--     "component_name" TEXT,
--     "component_height" INTEGER,
-- 	"background_image_url" TEXT,
-- 	"main_mage" TEXT,
-- 		-- href: TEXT
-- 		-- url: TEXT
-- 		-- alt: TEXT
-- 	"created_at" INTEGER,
--     "updated_at" INTEGER,
--     "version" INTEGER
-- );

-- CREATE TABLE IF NOT EXISTS "tri_image" (
--     "_id" TEXT NOT NULL PRIMARY KEY,
--     "component_type" TEXT,
--     "component_name" TEXT,
--     "background_upper_color" TEXT,
--     "background_lower_color" TEXT,
--     "primary_content" TEXT,
--         -- { link: { href: TEXT, label: TEXT, alt: TEXT }, image: { src: TEXT } }
--     "aside_image" TEXT,
--         -- Array [{ link: { href: TEXT, label: TEXT, alt: TEXT }, image: { src: TEXT }, content: TEXT }]
--     "created_at" INTEGER,
--     "updated_at" INTEGER,
--     "version" INTEGER
-- );

-- CREATE TABLE IF NOT EXISTS "dual_content" (
--     "_id" TEXT NOT NULL PRIMARY KEY,
--     "component_type" TEXT,
--     "component_name" TEXT,
--     "component_height" INTEGER,
--     "background_color" TEXT,
--     "background_image_url" TEXT,
--     "wide_content" TEXT,
--     "narrow_content" TEXT,
--     "created_at" INTEGER,
--     "updated_at" INTEGER,
--     "version" INTEGER
-- );

-- CREATE TABLE IF NOT EXISTS "footer" (
--     "_id" TEXT NOT NULL PRIMARY KEY,
--     "component_type" TEXT,
--     "component_name" TEXT,
--     "componentHeight" INTEGER,
-- 	"top_Bar_Image" TEXT,
--     "created_at" INTEGER,
--     "updated_at" INTEGER,
--     "version" INTEGER
-- );