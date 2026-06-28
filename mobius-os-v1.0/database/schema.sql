CREATE TABLE IF NOT EXISTS mos_organizations (organization_id TEXT PRIMARY KEY, name TEXT, created_at TIMESTAMPTZ DEFAULT NOW());
